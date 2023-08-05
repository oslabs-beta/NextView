import express from 'express';
import authenticateController from '../controllers/authenticateController';
import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(
  '/register',
  userController.registerUser,
  userController.loginUser,
  (req, res, next) => {
    res.status(201).json(res.locals.user);
  },
);

userRouter.post('/login', userController.loginUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

userRouter.get(
  '/authenticate',
  authenticateController.authenticate,
  userController.userInfo,
  (req, res, next) => {
    res.status(200).send(res.locals.user);
  },
);

userRouter.delete(
  '/logout',
  authenticateController.authenticate,
  userController.logoutUser,
  (req, res, next) => {
    res.sendStatus(204);
  },
);

export default userRouter;
