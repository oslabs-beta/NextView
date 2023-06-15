import { RequestHandler } from 'express';
import db from '../models/dataModels';

const pagesController: PagesController = {
  retrieveOverallAvg: async (req, res, next) => {
    try {
      const query = `SELECT EXTRACT(epoch from avg(duration)) * 1000 AS duration_avg_ms  FROM spans WHERE parent_id is null AND app_id = $1 AND http_target = $5 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4);`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
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
      const query = `SELECT CAST (COUNT(DISTINCT trace_id) AS INTEGER) AS trace_count FROM spans WHERE app_id = $1 AND http_target = $5 AND timestamp AT TIME ZONE 'GMT' AT TIME ZONE $4 BETWEEN ($2 AT TIME ZONE $4) AND ($3 AT TIME ZONE $4);`;
      const values = [
        req.params.appId,
        res.locals.startDate,
        res.locals.endDate,
        res.locals.timezone,
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
};

type PagesController = {
  retrieveOverallAvg: RequestHandler;
  retrieveTotalTraces: RequestHandler;
};

export default pagesController;
