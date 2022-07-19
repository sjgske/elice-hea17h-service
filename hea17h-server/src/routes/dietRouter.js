/* eslint-disable no-underscore-dangle */
import { Router } from 'express';
import { asyncHandler, isLoggedIn, isExpert } from '../middlewares/index.js';
import { dietService, userService } from '../services/index.js';

const dietRouter = Router();
dietRouter.use(isLoggedIn);

dietRouter.get(
    '/getDiet',
    asyncHandler(async (req, res) => {
        const userInfo = req.tokenInfo;
        const user = await userService.getUser(userInfo);
        const userDiet = await dietService.getMyDiet(user._id);
        res.status(userDiet.statusCode).json(userDiet);
    }),
);

dietRouter.get(
    '/getAllDiet',
    isExpert,
    asyncHandler(async (req, res) => {
        const result = await dietService.getAllDiet();
        res.status(200).json({
            status: 'success',
            statusCode: 200,
            payload: result,
        });
    }),
);

dietRouter.post(
    '/addDiet',
    asyncHandler(async (req, res) => {
        const userInfo = req.tokenInfo;
        const dietInfo = req.body;
        const user = await userService.getUser(userInfo);
        const result = await dietService.addDiet(user._id, dietInfo);
        res.status(201).json({
            status: 'success',
            statusCode: 201,
            payload: result,
        });
    }),
);

dietRouter.post(
    '/addComment',
    isExpert,
    asyncHandler(async (req, res) => {
        const { comment, dietId } = req.body;
        const { user } = req;
        const result = await dietService.addComment(comment, user._id, dietId);
        res.status(result.statusCode).json(result);
    }),
);

dietRouter.patch(
    '/modifyComment',
    isExpert,
    asyncHandler(async (req, res) => {
        const { dietId, commentId, content } = req.body;
        const result = await dietService.modifyComment(
            dietId,
            commentId,
            content,
        );
        res.status(result.statusCode).json(result);
    }),
);

dietRouter.delete(
    '/deleteDiet',
    asyncHandler(async (req, res) => {
        const { dietId } = req.body;
        const result = await dietService.deleteDiet(dietId);
        res.status(result.statusCode).json(result);
    }),
);

dietRouter.delete(
    '/deleteComment',
    isExpert,
    asyncHandler(async (req, res) => {
        const { dietId, commentId } = req.body;
        const result = await dietService.deleteComment(dietId, commentId);
        res.status(result.statusCode).json(result);
    }),
);
export default dietRouter;
