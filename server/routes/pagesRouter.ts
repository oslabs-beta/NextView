import express from 'express';
import appsController from '../controllers/appsController';
import pagesController from '../controllers/pagesController';
// have to use mergeParams to get appId from parent router
const pagesRouter = express.Router({ mergeParams: true });

pagesRouter.get(
  '/:pageId/data',
  appsController.initializeMetrics,
  appsController.setInterval,
  appsController.setTimezone,
  pagesController.retrieveOverallAvg,
  pagesController.retrieveTotalTraces,
  (req, res, next) => {
    res.status(200).send(res.locals.metrics);
  },
);

pagesRouter.get(
  '/',
  appsController.initializeMetrics,
  appsController.retrievePages,
  (req, res, next) => {
    res.status(200).send(res.locals.metrics.pages);
  },
);

export default pagesRouter;
