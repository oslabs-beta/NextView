import express from 'express';
import authenticateController from '../controllers/authenticateController';
import userController from '../controllers/userController';

const userRouter = express.Router();
// TODO also login user during registration
// TODO finish sending responses
userRouter.post('/register', userController.registerUser, (req, res, next) => {
  res.status(201).send('/register controller not yet implemented');
});

userRouter.post('/login', userController.loginUser, (req, res, next) => {
  res.status(204).send('/login controller not yet implemented');
});

userRouter.delete(
  '/logout',
  authenticateController.authenticate,
  (req, res, next) => {
    res.status(204).send('/logout controller not yet implemented');
  },
);

export default userRouter;
