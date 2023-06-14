import express from 'express';
import appsController from '../controllers/appsController';

// have to use mergeParams to get appId from parent router
const pagesRouter = express.Router({ mergeParams: true });

pagesRouter.get(
  '/:pageId/data',
  appsController.setInterval,
  appsController.setTimezone,
  (req, res, next) => {
    res.status(200).send('page data retrieval controller not yet implemented');
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
