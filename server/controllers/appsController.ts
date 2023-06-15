import db from '../models/dataModels';
import { v4 as uuid } from 'uuid';
import { RequestHandler } from 'express';

const appsController: AppsController = {
  createApiKey: (req, res, next) => {
    res.locals.apiKey = uuid();
    return next();
  },

  registerApp: async (req, res, next) => {
    if (!res.locals.apiKey)
      return next({
        log: `Error in registerApp controller method: No api key was generated`,
        status: 500,
        message: { err: 'No api key was generated' },
      });

    try {
      const text =
        'INSERT INTO apps(id, user_id, app_name) VALUES($1, $2, $3) RETURNING *';
      const values = [
        res.locals.apiKey,
        req.user.userId,
        req.body.app_name || null,
      ];
      const newApp = await db.query(text, values);
      res.locals.app = newApp.rows[0];

      return next();
    } catch (err) {
      // If an error occurs, pass it to the error handling middleware
      return next({
        log: `Error in registerApp controller method: ${err}`,
        status: 500,
        message: 'Error while creating app',
      });
    }
  },

  retrieveApps: async (req, res, next) => {
    try {
      const text = 'SELECT * FROM apps WHERE user_id = $1';
      const values = [req.user.userId];
      const apps = await db.query(text, values);
      res.locals.apps = apps.rows;

      return next();
    } catch (err) {
      // If an error occurs, pass it to the error handling middleware
      return next({
        log: `Error in retrieveApps controller method: ${err}`,
        status: 500,
        message: 'Error while creating app',
      });
    }
  },

  retrieveOverallAvg: async (req, res, next) => {
    try {
      const query = `SELECT EXTRACT(epoch from avg(duration)) * 1000 AS duration_avg_ms  FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4);`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
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
      const query = `SELECT CAST (COUNT(DISTINCT trace_id) AS INTEGER) AS trace_count FROM spans WHERE app_id = $1 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4);`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
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
    try {
      const query = `SELECT http_target as page, EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg  FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4) GROUP BY http_target ORDER BY avg(duration) desc LIMIT 5;`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.pageAvgDurations = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveTotalTraces controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveAvgKindDurations: async (req, res, next) => {
    try {
      const query = `SELECT kind_id, kind, EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg  FROM spans WHERE app_id = $1 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4) GROUP BY kind_id, kind;`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.kindAvgDurations = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveTotalTraces controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrieveAvgKindDurationsOverTime: async (req, res, next) => {
    const query = `SELECT to_char(TIMEZONE($2, periods.datetime), $4) as period,
    CASE WHEN EXTRACT(epoch from avg(duration) filter (where kind_id = 0))>0 THEN EXTRACT(epoch from avg(duration) filter (where kind_id = 0)) * 1000 ELSE 0 END AS internal,
    CASE WHEN EXTRACT(epoch from avg(duration) filter (where kind_id = 1))>0 THEN EXTRACT(epoch from avg(duration) filter (where kind_id = 1)) * 1000 ELSE 0 END AS server,
    CASE WHEN EXTRACT(epoch from avg(duration) filter (where kind_id = 2))>0 THEN EXTRACT(epoch from avg(duration) filter (where kind_id = 2)) * 1000 ELSE 0 END AS client
      FROM (
      select generate_series(date_trunc($5, $6::timestamptz), $7, $3) datetime) as periods
      left outer join spans on spans.timestamp AT TIME ZONE 'GMT' <@ tstzrange(datetime, datetime + $3::interval) and app_id = $1
      GROUP BY periods.datetime`;
    try {
      const values = [
        req.params.appId,
        res.locals.timezone,
        res.locals.intervalBy,
        res.locals.format,
        res.locals.intervalUnit,
        res.locals.startDate,
        res.locals.endDate,
      ];
      const data = await db.query(query, values);
      res.locals.metrics.kindAvgDurationsOverTime = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveAvgKindDurationsOverTime controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  retrievePages: async (req, res, next) => {
    try {
      const query =
        'SELECT http_target as page FROM spans WHERE parent_id is null AND app_id = $1 GROUP BY http_target ORDER BY avg(duration) desc;';
      const values = [req.params.appId];
      const data = await db.query(query, values);
      res.locals.metrics.pages = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveTotalTraces controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },

  setInterval: (req, res, next) => {
    const { start, end } = req.query;

    const startDate = start
      ? new Date(start as string)
      : new Date(Date.now() - 86400000); // if start is empty, set to yesterday
    const endDate = end ? new Date(end as string) : new Date(); // if end is empty, set to now
    const intervalSeconds = (endDate.getTime() - startDate.getTime()) / 1000; // get seconds of difference between start and end
    if (intervalSeconds < 0)
      return next({
        log: `Error in setInterval controller method: End date is before start date`,
        status: 400,
        message: 'End date is before start date',
      });

    let format = 'FMHH12:MI AM'; // default
    let intervalUnit = 'hour'; // default
    let intervalBy = '1 hour'; // default

    // TODO: change this to a calculation :(
    if (intervalSeconds <= 300) {
      // 5 minutes
      format = 'FMHH12:MI:SS AM';
      intervalUnit = 'second';
      intervalBy = '10 second';
    } else if (intervalSeconds <= 900) {
      // 15 minutes
      format = 'FMHH12:MI:SS AM';
      intervalUnit = 'second';
      intervalBy = '30 second';
    } else if (intervalSeconds <= 1800) {
      // 30 minutes
      format = 'FMHH12:MI AM';
      intervalUnit = 'minute';
      intervalBy = '1 minute';
    } else if (intervalSeconds <= 3600) {
      // 1 hour
      format = 'FMHH12:MI AM';
      intervalUnit = 'minute';
      intervalBy = '2 minute';
    } else if (intervalSeconds <= 21600) {
      // 6 hours
      format = 'FMHH12:MI AM';
      intervalUnit = 'minute';
      intervalBy = '15 minute';
    } else if (intervalSeconds <= 43200) {
      // 12 hours
      format = 'FMHH12:MI AM';
      intervalUnit = 'minute';
      intervalBy = '30 minute';
    } else if (intervalSeconds <= 172800) {
      // 2 days
      format = 'FMMM/FMDD FMHH12:MI AM';
      intervalUnit = 'hour';
      intervalBy = '1 hour';
    } else if (intervalSeconds <= 518400) {
      // 6 days
      format = 'FMMM/FMDD FMHH12:MI:SS AM';
      intervalUnit = 'hour';
      intervalBy = '4 hour';
    } else if (intervalSeconds <= 2592000) {
      // 30 days
      format = 'FMMM/FMDD';
      intervalUnit = 'day';
      intervalBy = '1 day';
    } else if (intervalSeconds <= 5184000) {
      // 60 days
      format = 'FMMM/FMDD';
      intervalUnit = 'day';
      intervalBy = '2 day';
    } else if (intervalSeconds <= 7776000) {
      // 90 days
      format = 'FMMM/FMDD';
      intervalUnit = 'day';
      intervalBy = '3 day';
    } else if (intervalSeconds <= 10368000) {
      // 120 days
      format = 'FMMM/FMDD/YYYY';
      intervalUnit = 'week';
      intervalBy = '1 week';
    } else if (intervalSeconds <= 77760000) {
      // 900 days
      format = 'FMMM/FMDD/YYYY';
      intervalUnit = 'month';
      intervalBy = '1 month';
    } else if (intervalSeconds > 77760000) {
      // > 900 days
      format = 'FMMM/FMDD/YYYY';
      intervalUnit = 'year';
      intervalBy = '1 year';
    }

    res.locals.format = format; // format of resulting period
    res.locals.intervalUnit = intervalUnit; // what to round times to
    res.locals.intervalBy = intervalBy; // what separates each period
    res.locals.startDate = startDate;
    res.locals.endDate = endDate;

    return next();
  },

  setTimezone: (req, res, next) => {
    const { timezone } = req.body;

    res.locals.timezone = timezone || 'GMT';

    return next();
  },

  initializeMetrics: (req, res, next) => {
    res.locals.metrics = {};

    return next();
  },
};

type AppsController = {
  createApiKey: RequestHandler;
  registerApp: RequestHandler;
  retrieveApps: RequestHandler;
  retrieveOverallAvg: RequestHandler;
  retrieveTotalTraces: RequestHandler;
  retrieveAvgPageDurations: RequestHandler;
  retrieveAvgKindDurations: RequestHandler;
  retrieveAvgKindDurationsOverTime: RequestHandler;
  retrievePages: RequestHandler;
  setInterval: RequestHandler;
  setTimezone: RequestHandler;
  initializeMetrics: RequestHandler;
};

export default appsController;
