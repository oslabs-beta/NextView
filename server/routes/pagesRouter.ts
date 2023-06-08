import express from 'express';

const pagesRouter = express.Router();

pagesRouter.get('/:pageId/data', (req, res, next) => {
  res.status(200).send('page data retrieval controller not yet implemented');
});

pagesRouter.get('/', (req, res, next) => {
  res.status(200).send('page list retrieval controller not yet implemented');
});

export default pagesRouter;
