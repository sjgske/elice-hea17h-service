import { Router } from 'express';
import { asyncHandler, isLoggedIn } from '../middlewares/index.js';
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
    asyncHandler(async (req, res) => {
        const userInfo = req.tokenInfo;
        const user = await userService.getUser(userInfo);
        if (user.role != 'expert') {
            res.status(400).json({
                status: 'error',
                statusCode: 400,
                message: '전문가만 이용할 수 있는 서비스입니다!',
            });
        }
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
        console.log(userInfo);
        const user = await userService.getUser(userInfo);
        console.log(user);
        const result = await dietService.addDiet(user._id, dietInfo);
        res.status(201).json(result);
    }),
);

export default dietRouter;