import express from 'express';
import pagesRouter from './pagesRouter';
const appsRouter = express.Router();

appsRouter.use('/:appId/pages', pagesRouter);

// TODO add controllers
appsRouter.get('/:appId/data', (req, res, next) => {
  res.status(200).send('app data retrieval controller not yet implemented');
});

appsRouter.delete('/:appId', (req, res, next) => {
  res.status(204).send('app deletion controller not yet implemented');
});

appsRouter.post('/', (req, res, next) => {
  res.status(201).send('app creation controller not yet implemented');
});

appsRouter.get('/', (req, res, next) => {
  res.status(201).send('get apps controller not yet implemented');
});

export default appsRouter;
