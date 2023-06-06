import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import db from '../models/dataModels';

const userController: UserController = {
  registerUser: async (req, res, next) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const text =
        'INSERT INTO users(username, password) VALUES($1, $2) RETURNING *';
      const values = [req.body.username, hashedPassword];
      const newUser = await db.query(text, values);
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
      // Get user with the given username
      const text = 'SELECT * FROM users WHERE username = $1';
      const values = [req.body.username];
      const user = await db.query(text, values);

      // If no user is found with this username, throw an error
      if (!user.rows.length) {
        throw new Error('No user found with this username');
      }

      // Check if the password is correct. bcrypt.compare will hash the provided password and compare it to the stored hash.
      const match = await bcrypt.compare(
        req.body.password,
        user.rows[0].password,
      );

      // If the passwords do not match, throw an error
      if (!match) {
        throw new Error('Incorrect password');
      }

      // Create a JWT. The payload is the user's id, the secret key is stored in env, and it will expire in 1 hour
      const token = jwt.sign(
        { userId: user.rows[0]._id },
        process.env.JWT_SECRET as jwt.Secret,
        { expiresIn: '1h' },
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

  // TODO implement logout
  logoutUser: async (req, res, next) => {
    return next();
  },
};

type UserController = {
  registerUser: RequestHandler;
  loginUser: RequestHandler;
  logoutUser: RequestHandler;
};

export default userController;
