import express from 'express';
import pagesRouter from './pagesRouter';
import appsController from '../controllers/appsController';

const appsRouter = express.Router();

appsRouter.use('/:appId/pages', pagesRouter);

appsRouter.get(
  '/:appId/data',
  appsController.setInterval,
  appsController.retrievePages,
  appsController.retrieveOverallAvg,
  appsController.retrieveTotalTraces,
  appsController.retrieveAvgPageDurations,
  appsController.retrieveAvgKindDurations,
  appsController.retrieveAvgKindDurationsOverTime,
  (req, res, next) => {
    res.status(200).send(res.locals.metrics);
  },
);

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
