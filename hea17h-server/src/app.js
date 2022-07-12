import createError from 'http-errors';
import express from 'express';
<<<<<<< HEAD
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import errorHandler from './middlewares/errorHandler.js'
import { userRouter, categoryRouter, foodRouter } from './routes/index.js';
=======
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import { userRouter } from './routes/index.js';
>>>>>>> feature-be-user

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/foods', foodRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// ErrorHandler must be declared at bottom
app.use(errorHandler);

export default app;
