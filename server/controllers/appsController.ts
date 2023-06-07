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
      const query =
        'SELECT EXTRACT(epoch from avg(duration)) * 1000 AS duration_avg_ms  FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW();';
      const values = [req.params.appId, res.locals.interval];
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
      const query =
        'SELECT CAST (COUNT(DISTINCT trace_id) AS INTEGER) AS trace_count FROM spans WHERE app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW();';
      const values = [req.params.appId, res.locals.interval];
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
      const query =
        'SELECT http_target, EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg  FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW() GROUP BY http_target ORDER BY avg(duration) desc LIMIT 5;';
      const values = [req.params.appId, res.locals.interval];
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
      const query =
        'SELECT kind_id, kind, EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg  FROM spans WHERE app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW() GROUP BY kind_id, kind;';
      const values = [req.params.appId, res.locals.interval];
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

  setInterval: (req, res, next) => {
    switch (req.query.filter) {
      case 'day':
        res.locals.interval = '24 HOURS';
        break;
      case 'week':
        res.locals.interval = '7 DAYS';
        break;
      case 'month':
        res.locals.interval = '1 MONTH';
        break;
      default:
        return next({
          log: `Error in setInterval controller method: No date filter provided`,
          status: 400,
          message: 'No date filter provided',
        });
    }
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
  setInterval: RequestHandler;
};

export default appsController;
