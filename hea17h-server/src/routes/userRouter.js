import { Router } from 'express';
import { userService } from '../services/index.js';
const userRouter = Router();

userRouter.get('/getUser', async function (req, res, next) {
    try {
        const id = req.query.userId;
        const foundUser = await userService.getUser(id);
        console.log('불러오기 성공!' + foundUser.name);
        res.json(foundUser);
    } catch (err) {
        next(err);
    }
});

userRouter.patch('/modifyUser', async function (req, res, next) {
    try {
        const { id, name, password, gender, height, weight, goalWeight } =
            req.body;
        const updateUserInfo = {
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
        };
        const afterUpdateUserInfo = await userService.updateUser(
            updateUserInfo,
        );
        console.log(afterUpdateUserInfo);
        res.json(afterUpdateUserInfo);
    } catch (err) {
        next(err);
    }
});

userRouter.post('/signIn', async function (req, res, next) {
    try {
        const { id, name, password, gender, height, weight, goalWeight } =
            req.body;
        const newUser = await userService.addUser({
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
        });
        console.log('삽입 성공!' + newUser.name + '가 회원가입되었습니다');
        res.json(newUser);
    } catch (err) {
        next(err);
    }
});

userRouter.delete('/deleteUser', async function (req, res, next) {
    try {
        const id = req.query.userId;
        const result = await userService.deleteUser(id);
        if (!result) {
            throw new Error('삭제에 실패하였습니다. 다시한번 확인해주세요');
        }
        res.status(200).json({ message: '성공적으로 삭제되었습니다.' });
    } catch (err) {
        next(err);
    }
});

export { userRouter };
