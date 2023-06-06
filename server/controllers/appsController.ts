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
};

type AppsController = {
  createApiKey: RequestHandler;
  registerApp: RequestHandler;
  retrieveApps: RequestHandler;
};

export default appsController;
