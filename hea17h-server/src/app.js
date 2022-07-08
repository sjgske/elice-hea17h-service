import createError from 'http-errors'
import express from 'express';
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import errorHandler from './middlewares/errorHandler.js'
import { userRouter, categoryRouter, foodRouter } from './routes/index.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/foods', foodRouter);


const foo = [ 1,2,3];
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//ErrorHandler must be declared at bottom
app.use(errorHandler);

export default app;