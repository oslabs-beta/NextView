import express from 'express';
import authenticateController from '../controllers/authenticateController';
import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post(
  '/register',
  userController.registerUser,
  userController.loginUser,
  (req, res, next) => {
    res.sendStatus(201);
  },
);

userRouter.post('/login', userController.loginUser, (req, res, next) => {
  res.status(204).send('/login controller not yet implemented');
});

userRouter.delete(
  '/logout',
  authenticateController.authenticate,
  userController.logoutUser,
  (req, res, next) => {
    res.sendStatus(204);
  },
);

export default userRouter;
