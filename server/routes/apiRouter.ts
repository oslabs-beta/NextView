import express from 'express';

const apiRouter = express.Router();
// TODO also login user during registration
// TODO finish sending responses
apiRouter.post('/', (req, res, next) => {
  res.status(201).send('/ api controller not yet implemented');
});

export default apiRouter;
