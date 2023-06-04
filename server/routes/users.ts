import express from 'express';

const usersRouter = express.Router();

usersRouter.post('/register', (req, res, next) => {
  res.status(201).send('/register controller not yet implemented');
});

usersRouter.post('/login', (req, res, next) => {
  res.status(204).send('/login controller not yet implemented');
});

usersRouter.delete('/logout', (req, res, next) => {
  res.status(204).send('/logout controller not yet implemented');
});

export default usersRouter;
