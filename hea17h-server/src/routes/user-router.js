import { Router } from 'express';

import { UserService } from '../services/index.js';
const userRouter = Router();

userRouter.post('/signIn', async function (req, res, next) {
    try {
        const { id, name, password, gender, height, weight, goalWeight } =
            req.body;
        const newUser = await UserService.addUser({
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
        });
        console.log('삽입 성공!' + newUser.name + '가 회원가입되었습니다');
        res.status(201).json(newUser);
    } catch (err) {
        next(error);
    }
});

export { userRouter };
