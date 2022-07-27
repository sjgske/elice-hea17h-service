import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import {
    userRouter,
    categoryRouter,
    foodRouter,
    dietRouter,
} from './routes/index.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/foods', foodRouter);
app.use('/diets', dietRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use(errorHandler);

export default app;
