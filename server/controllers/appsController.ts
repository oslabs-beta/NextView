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
        'SELECT http_target as page, EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg  FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW() GROUP BY http_target ORDER BY avg(duration) desc LIMIT 5;';
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

  retrieveAvgKindDurationsOverTime: async (req, res, next) => {
    // TODO modify this query so it works for different time intervals
    // TODO modify this query so it doesnt set timezone
    const query = `SELECT periods.period, CASE WHEN Internal>0 THEN Internal ELSE 0 END AS internal, 
      CASE WHEN server>0 THEN server ELSE 0 END AS server,
      CASE WHEN client>0 THEN client ELSE 0 END AS client
      FROM (
      select to_char(date_trunc('hour', datetime), 'FMHH12:MI AM') AS period, datetime
      from generate_series(date_trunc('hour', TIMEZONE('America/New_York', NOW())) - interval '23' hour, date_trunc('hour', TIMEZONE('America/New_York', NOW())) , interval '1' hour) datetime) as periods
      left outer join (
      SELECT
          to_char(date_trunc('hour', TIMEZONE('America/New_York', timestamp)), 'FMHH12:MI AM') AS period,
          COUNT(*), EXTRACT(epoch from avg(duration)) * 1000 AS ms_avg, date_trunc('hour', TIMEZONE('America/New_York', timestamp)) as datetime,
          EXTRACT(epoch from avg(duration) filter (where kind_id = 0)) * 1000 as internal,
          EXTRACT(epoch from avg(duration) filter (where kind_id = 1)) * 1000 as server,
          EXTRACT(epoch from avg(duration) filter (where kind_id = 2)) * 1000 as client,
          EXTRACT(epoch from avg(duration) filter (where kind_id = 3)) * 1000 as producer,
          EXTRACT(epoch from avg(duration) filter (where kind_id = 4)) * 1000 as consumer
      FROM 
          spans
      WHERE app_id = $1
      GROUP BY date_trunc('hour', TIMEZONE('America/New_York', timestamp))) as avgs on periods.datetime = avgs.datetime`;
    try {
      const data = await db.query(query, [req.params.appId]);
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
        'SELECT http_target as page FROM spans WHERE parent_id is null AND app_id = $1 AND timestamp BETWEEN NOW() - $2::interval AND NOW() GROUP BY http_target ORDER BY avg(duration) desc;';
      const values = [req.params.appId, res.locals.interval];
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
    const { interval, unit } = req.query;

    if (interval === undefined || unit === undefined)
      return next({
        log: `Error in setInterval controller method: Date interval not provided`,
        status: 400,
        message: 'Date interval not provided',
      });

    switch (unit) {
      case 'h':
        res.locals.interval = `${interval} HOURS`;
        break;
      case 'd':
        res.locals.interval = `${interval} DAYS`;
        break;
      case 'w':
        res.locals.interval = `${interval} WEEKS`;
        break;
      case 'y':
        res.locals.interval = `${interval} YEARS`;
        break;
      case 'm':
        res.locals.interval = `${interval} MONTHS`;
        break;
      case 'min':
        res.locals.interval = `${interval} MINUTES`;
        break;
      default:
        return next({
          log: `Error in setInterval controller method: Incorrect date format`,
          status: 400,
          message: 'Incorrect date filter provided',
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
  retrieveAvgKindDurationsOverTime: RequestHandler;
  retrievePages: RequestHandler;
  setInterval: RequestHandler;
};

export default appsController;
