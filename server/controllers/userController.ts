import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import db from '../models/dataModels';
import getUser from '../../helpers/getUser';

const userController: UserController = {
  registerUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      // Validate unique username
      const user = await getUser(username);

      // If user is found in DB (username taken), throw an error
      if (user.rows.length) {
        throw new Error('Username is unavailable');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const query =
        'INSERT INTO users(username, password) VALUES($1, $2) RETURNING *';
      const values = [username, hashedPassword];
      const newUser = await db.query(query, values);
      res.locals.user = newUser.rows[0];

      return next();
    } catch (err) {
      // If an error occurs, pass it to the error handling middleware
      return next({
        log: `Error in registerUser controller method: ${err}`,
        status: 400,
        message: 'Error while registering new user',
      });
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      // Get user with the given username
      const user = await getUser(username);

      // If no user is found with this username, throw an error
      if (!user.rows.length) {
        throw new Error('Incorrect password or username');
      }

      // Check if the password is correct. bcrypt.compare will hash the provided password and compare it to the stored hash.
      const match = await bcrypt.compare(password, user.rows[0].password);

      // If the passwords do not match, throw an error
      if (!match) {
        throw new Error('Incorrect password or username');
      }

      // Create a JWT. The payload is the user's id, the secret key is stored in env, and it will expire in 1 hour
      const token = jwt.sign(
        { userId: user.rows[0]._id },
        process.env.JWT_SECRET as jwt.Secret,
        { expiresIn: '30d' },
      );

      // Set the JWT token as an HTTP-only cookie
      res.cookie('jwtToken', token, { httpOnly: true });

      // Save the token and the username to res.locals for further middleware to use
      res.locals.user = {
        token,
        user: user.rows[0].username,
      };

      return next();
    } catch (err) {
      if (err instanceof Error) {
        // If an error occurs, pass it to the error handling middleware
        return next({
          log: `Error in loginUser controller method ${err}`,
          status: 400,
          message: { err: err.message },
        });
      } else throw err;
    }
  },

  logoutUser: async (req, res, next) => {
    res.clearCookie('jwtToken');
    return next();
  },

  userInfo: async (req, res, next) => {
    try {
      const query =
        'SELECT users._id, users.username, created_on FROM users WHERE _id = $1';
      const values = [req.user.userId];
      const data = await db.query(query, values);
      res.locals.user = data.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `Error in retrieveTotalTraces controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }
  },
};

type UserController = {
  registerUser: RequestHandler;
  loginUser: RequestHandler;
  logoutUser: RequestHandler;
  userInfo: RequestHandler;
};

export default userController;
