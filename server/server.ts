import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app: Express = express();

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * --- Express Routes ---
 * Express will attempt to match these routes in the order they are declared here.
 * If a route handler / middleware handles a request and sends a response without
 * calling `next()`, then none of the route handlers after that route will run!
 * This can be very useful for adding authorization to certain routes...
 */

app.get('/api', (req: Request, res: Response) => {
  res.send('test');
});

app.get('/testerror', (req: Request, res: Response, next: NextFunction) => {
  next({
    log: `getDBName has an error`,
    status: 400,
    message: { err: 'An error occurred' },
  });
});

app.get('/test', (req: Request, res: Response) => {
  res.status(200).send('Hello world');
});

// if running from production, serve bundled files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), 'dist')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
  });
}

/**
 * 404 handler
 */
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  },
);

export default app.listen(PORT, () => console.log('listening on port ', PORT));
