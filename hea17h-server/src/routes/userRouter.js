/* eslint-disable no-console */
import { Router } from 'express';
import is from '@sindresorhus/is';
import { userService } from '../services/index.js';
import {
    isLoggedIn,
    naverCallback,
    kakaoCallback,
    asyncHandler,
} from '../middlewares/index.js';
import { uploadExpert } from '../utils/index.js';

const userRouter = Router();

// /getUser => /
userRouter.get(
    '/',
    isLoggedIn,
    asyncHandler(async (req, res) => {
        const userInfo = req.tokenInfo;
        const foundUser = await userService.getUser(userInfo);
        console.log(`불러오기 성공!${foundUser.name}`);
        res.json(foundUser);
    }),
);

// getExpertInfo => /experts

userRouter.get(
    '/experts',
    isLoggedIn,
    asyncHandler(async (req, res) => {
        const userInfo = req.tokenInfo;
        const result = await userService.getCertificate(userInfo);
        res.status(result.statusCode).json(result);
    }),
);

userRouter.get(
    '/kauth/callback',
    kakaoCallback,
    asyncHandler(async (req, res) => {
        const user = req.kakaoUser;
        const userInfo = {
            id: user.id,
            password: process.env.KAKAO_USER_PASSWORD,
        };
        const result = await userService.login(userInfo);
        console.log(result);
        res.redirect(`${process.env.CLIENT_URL}?userToken=${result.token}`);
    }),
);

userRouter.get(
    '/nauth/callback',
    naverCallback,
    asyncHandler(async (req, res) => {
        const user = req.naverUser;
        const userInfo = {
            id: user.id,
            password: process.env.NAVER_USER_PASSWORD,
        };
        const result = await userService.login(userInfo);
        console.log(result);
        res.redirect(`${process.env.CLIENT_URL}?userToken=${result.token}`);
    }),
);

// updateUser =>  /

userRouter.patch(
    '/',
    isLoggedIn,
    asyncHandler(async (req, res) => {
        const userInfo = req.body;
        const afterUpdateUserInfo = await userService.updateUser(userInfo);
        console.log(afterUpdateUserInfo);
        res.json(afterUpdateUserInfo);
    }),
);

// signupDetail => auth

userRouter.patch(
    '/auth',
    asyncHandler(async (req, res) => {
        const userInfo = req.body;
        const updatedUser = await userService.updateUser(userInfo);
        res.json(updatedUser);
    }),
);

// signup => auth
userRouter.post(
    '/auth',
    asyncHandler(async (req, res) => {
        const { id, name, password } = req.body;
        const newUser = await userService.addUser({
            id,
            name,
            password,
        });
        console.log(`삽입 성공! ${newUser.name} 가 회원가입되었습니다`);
        res.json(newUser);
    }),
);

// login => /
userRouter.post(
    '/',
    asyncHandler(async (req, res) => {
        const { id, password } = req.body;
        const loginInfo = { id, password };
        const result = await userService.login(loginInfo);
        res.status(result.statusCode).json(result);
    }),
);

// registerExpert => experts

userRouter.post(
    '/experts',
    isLoggedIn,
    uploadExpert.single('image'),
    asyncHandler(async (req, res) => {
        if (is.emptyObject(req.body)) {
            res.status(400).json(
                'header의 ContentType을 multipart/formdata 로 설정해주세요',
            );
        }
        const userInfo = req.tokenInfo;
        const image = req.file.location;
        const { name } = req.body;
        const certificateInfo = { name, image };
        const result = await userService.addExpert(userInfo, certificateInfo);
        res.status(result.statusCode).json(result);
    }),
);

// deleteUser => /
userRouter.delete(
    '/',
    isLoggedIn,
    asyncHandler(async (req, res) => {
        const { id, password } = req.body;
        const result = await userService.deleteUser(id, password);
        res.status(result.statusCode).json(result);
    }),
);

export default userRouter;
