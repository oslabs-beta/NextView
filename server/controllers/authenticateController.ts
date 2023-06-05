import jwt from 'jsonwebtoken'; // Import JSON Web Token library
import { Request, RequestHandler } from 'express';

const authenticateController: AuthenticateController = {
  authenticate: (req, res, next) => {
    return next();
    // TODO enable below code once login on front-end is up and running
    const token = req.cookies.jwtToken;

    // If no token is provided, send 400  status and end the function
    if (!token) {
      return next({
        log: `Error in authenticateController controller method: No token provided`,
        status: 400,
        message: 'No token provided',
      });
    }

    // Verify the provided token with the secret key
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);

      // If token is valid, attach decoded (user) to the request object
      req.user = decoded;

      // Pass control to the next middleware function in the stack
      return next();
    } catch (e) {
      // If an error occurred (indicating invalid token), send 401 status and end the function
      if (e instanceof Error) {
        return next({
          log: `Error in authenticateController: ${e}`,
          status: 401,
          message: 'Invalid token provided',
        });
      } else throw e;
    }
  },
};

type AuthenticateController = {
  authenticate: RequestHandler;
};

export default authenticateController; // Export the function for use in other files
