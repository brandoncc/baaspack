import express from 'express';
import session from 'express-session';
import cors from 'cors';

import errorHandlers from './handlers/errorHandlers';

const createExpressApp = (routes, authRoutes, passport) => {
  const app = express();

  // Enable CORS from all origins
  app.use(cors());

  // Parse JSON from request bodies
  app.use(express.json());

  // Parse Url Encoded request bodies, typically sent from forms.
  app.use(express.urlencoded({ extended: true }));

  // Configure sessions
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: true,
    },
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // Configure routes for collections w/ error handling built-in
  app.use(authRoutes);
  app.use(routes);

  // 404 response for requests that didn't hit a route
  app.use(errorHandlers.notFound);

  // One of our error handlers will see if these errors are just validation errors
  app.use(errorHandlers.validationErrors);

  // Configure error handlers
  // Development Error Handler - Prints stack trace
  if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
  }

  // production error handler -- does not print stack trace
  app.use(errorHandlers.productionErrors);

  return app;
};

export default createExpressApp;
