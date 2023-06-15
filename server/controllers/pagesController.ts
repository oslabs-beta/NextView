import { RequestHandler } from 'express';
import db from '../models/dataModels';

const pagesController: PagesController = {
  retrieveOverallAvg: async (req, res, next) => {
    try {
      const query = `SELECT EXTRACT(epoch from avg(duration)) * 1000 AS duration_avg_ms  
      FROM spans INNER JOIN pages on spans.http_target = pages.http_target and spans.app_id = spans.app_id
      WHERE parent_id is null AND spans.app_id = $1 AND pages._id = $4 AND spans.timestamp >= $2::timestamptz AND spans.timestamp <= $3::timestamptz;`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        req.params.pageId,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.overallAvg = data.rows[0].duration_avg_ms;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveOverallAvg controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveTotalTraces: async (req, res, next) => {
    try {
      const query = `SELECT CAST (COUNT(DISTINCT trace_id) AS INTEGER) AS trace_count 
      FROM spans INNER JOIN pages on spans.http_target = pages.http_target and spans.app_id = spans.app_id
      WHERE spans.app_id = $1 AND pages._id = $4 AND spans.timestamp >= $2::timestamptz AND spans.timestamp <= $3::timestamptz;`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        req.params.pageId,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.traceCount = data.rows[0].trace_count;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveTotalTraces controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveAvgPageDurations: async (req, res, next) => {
    const query = `SELECT to_char(TIMEZONE($2, periods.datetime), $4) as period,
    CASE WHEN EXTRACT(epoch from avg(duration))>0 THEN EXTRACT(epoch from avg(duration)) * 1000 ELSE 0 END AS "Page Duration"
      FROM (
      SELECT generate_series(date_trunc($5, $6::timestamptz), $7, $3) datetime) as periods
      LEFT OUTER JOIN spans on spans.timestamp AT TIME ZONE 'GMT' <@ tstzrange(datetime, datetime + $3::interval) AND spans.app_id = $1 
      AND spans.http_target IN (SELECT http_target FROM pages WHERE app_id = $1 AND _id = $8)
      GROUP BY periods.datetime
      ORDER BY periods.datetime`;
    try {
      const values = [
        req.params.appId,
        res.locals.timezone,
        res.locals.intervalBy,
        res.locals.format,
        res.locals.intervalUnit,
        res.locals.startDate,
        res.locals.endDate,
        req.params.pageId,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.avgPageDurationsOverTime = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveAvgKindDurationsOverTime controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveAvgActionDurations: async (req, res, next) => {
    const queryGetActions = `SELECT DISTINCT pages._id, pages.http_target, spans_child.name
    FROM spans as spans_child inner join spans as spans_parent on spans_child.trace_id = spans_parent.trace_id 
    AND spans_parent.app_id = spans_child.app_id 
    AND spans_parent.parent_id is null
    inner join pages on spans_parent.http_target = pages.http_target and spans_parent.app_id = pages.app_id
    WHERE spans_child.parent_id is not null AND spans_child.app_id = $1 AND pages._id = $2
    AND spans_child.timestamp >= $3::timestamptz AND spans_child.timestamp <= $4::timestamptz`;

    const query = `SELECT to_char(TIMEZONE($2, periods.datetime), $4) as period,
    CASE WHEN EXTRACT(epoch from avg(duration))>0 THEN EXTRACT(epoch from avg(duration)) * 1000 ELSE 0 END AS ACTION
      FROM (
      select generate_series(date_trunc($5, $6::timestamptz), $7, $3) datetime) as periods
      left outer join spans on spans.timestamp AT TIME ZONE 'GMT' <@ tstzrange(datetime, datetime + $3::interval) and spans.app_id = $1 AND spans.name = $8
      AND spans.trace_id in (SELECT DISTINCT trace_id FROM spans WHERE http_target = $9)
      GROUP BY periods.datetime
      ORDER BY periods.datetime`;

    try {
      // get array of actions (children requests)
      const valuesGetActions = [
        req.params.appId,
        req.params.pageId,
        res.locals.startDate,
        res.locals.endDate,
      ];

      const actionData = await db.query(queryGetActions, valuesGetActions);
      const aggregatedQueryResults: Period[] = [];
      // for each action, get aggregation of data based on time period
      // uses map and promise.all to run queries in parallel
      await Promise.all(
        actionData.rows.map(async (el) => {
          const values = [
            req.params.appId,
            res.locals.timezone,
            res.locals.intervalBy,
            res.locals.format,
            res.locals.intervalUnit,
            res.locals.startDate,
            res.locals.endDate,
            el.name,
            el.http_target,
          ];
          const data = await db.query(query, values);

          // combine data into our aggregated array
          data.rows.forEach((row, i) => {
            if (aggregatedQueryResults[i] === undefined) {
              aggregatedQueryResults.push({
                period: row.period,
                // add key with name of action
                [el.name]: row.action,
              });
            } else aggregatedQueryResults[i][el.name] = row.action;
          });
        }),
      );

      res.locals.metrics.avgActionDurationsOverTime = aggregatedQueryResults;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveAvgKindDurationsOverTime controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveAvgActionData: async (req, res, next) => {
    try {
      const query = `
      SELECT name as "Action", EXTRACT(epoch from avg(duration)) * 1000 AS "Avg. duration (ms)", count(id) as "Total no. of executions", count(distinct trace_id) as "Total no. of traces", kind as "Kind" 
      FROM spans 
      WHERE spans.app_id = $1 AND spans.timestamp >= $2::timestamptz AND spans.timestamp <= $3::timestamptz 
      AND trace_id IN (SELECT trace_id FROM spans INNER JOIN pages on spans.http_target = pages.http_target WHERE pages._id = $4)
      GROUP BY name, kind`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        req.params.pageId,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.overallPageData = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveOverallAvg controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },
};

type Period = {
  [action: string]: number | string;
};

type PagesController = {
  retrieveOverallAvg: RequestHandler;
  retrieveTotalTraces: RequestHandler;
  retrieveAvgPageDurations: RequestHandler;
  retrieveAvgActionDurations: RequestHandler;
  retrieveAvgActionData: RequestHandler;
};

export default pagesController;
