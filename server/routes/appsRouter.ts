import express from 'express';
import pagesRouter from './pagesRouter';
import appsController from '../controllers/appsController';

const appsRouter = express.Router();

appsRouter.use('/:appId/pages', pagesRouter);

// TODO add controllers
appsRouter.get('/:appId/data', (req, res, next) => {
  res.status(200).send('app data retrieval controller not yet implemented');
});

appsRouter.delete('/:appId', (req, res, next) => {
  res.status(204).send('app deletion controller not yet implemented');
});

appsRouter.post(
  '/',
  appsController.createApiKey,
  appsController.registerApp,
  (req, res, next) => {
    res.status(201).send(res.locals.app);
  },
);

appsRouter.get('/', appsController.retrieveApps, (req, res, next) => {
  res.status(200).send(res.locals.apps);
});

export default appsRouter;
