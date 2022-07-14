/* eslint-disable no-console */
import { Router } from 'express';
import { userService } from '../services/index.js';
import { isLoggedIn } from '../middlewares/index.js';

const userRouter = Router();

userRouter.get('/getUser', isLoggedIn, async (req, res, next) => {
    try {
        const info = req.tokenInfo;
        console.log(info);
        const foundUser = await userService.getUser(info);
        console.log(`불러오기 성공!${foundUser.name}`);
        res.json(foundUser);
    } catch (err) {
        next(err);
    }
});

userRouter.patch('/updateUser', isLoggedIn, async (req, res, next) => {
    try {
        const userInfo = req.body;
        const afterUpdateUserInfo = await userService.updateUser(userInfo);
        console.log(afterUpdateUserInfo);
        res.json(afterUpdateUserInfo);
    } catch (err) {
        next(err);
    }
});

userRouter.post('/signIn', async (req, res, next) => {
    try {
        const {
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
            age,
            goal,
            activeLevel,
        } = req.body;
        const newUser = await userService.addUser({
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
            age,
            goal,
            activeLevel,
        });
        console.log(`삽입 성공! ${newUser.name} 가 회원가입되었습니다`);
        res.json(newUser);
    } catch (err) {
        next(err);
    }
});

userRouter.post('/login', async (req, res, next) => {
    try {
        const { id, password } = req.body;
        const loginInfo = { id, password };
        const result = await userService.login(loginInfo);
        res.status(result.statusCode).json(result);
    } catch (err) {
        next(err);
    }
});

userRouter.delete('/deleteUser', isLoggedIn, async (req, res, next) => {
    try {
        const userInfo = req.tokenInfo;
        const result = await userService.deleteUser(userInfo.id);
        console.log(result);
        res.status(result.statusCode).json(result);
    } catch (err) {
        next(err);
    }
});

export default userRouter;
