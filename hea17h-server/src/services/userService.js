import bcrypt from 'bcrypt';
import { handleJWT } from '../utils/index.js';
import { userModel } from '../db/index.js';

class UserService {
    constructor() {
        this.userModel = userModel;
    }

    async addUser(userInfo) {
        const {
            id,
            name,
            password,
            gender,
            height,
            weight,
            age,
            goal,
            activeLevel,
        } = userInfo;
        const user = await this.userModel.findById(id);
        if (user) {
            const error = {
                status: 'error',
                statusCode: 422,
                message: '이미 존재하는 아이디입니다',
            };
            return error;
        }
        // 비밀번호 암호화 후 디비에 저장
        const hashedPassword = await bcrypt.hash(password, 10);
        const newInfo = {
            id,
            name,
            password: hashedPassword,
            gender,
            height,
            weight,
            age,
            goal,
            activeLevel,
        };
        const newUser = await this.userModel.create(newInfo);
        return newUser;
    }

    async deleteUser(userId) {
        const isUser = await this.userModel.findById(userId);
        if (!isUser) {
            const error = {
                status: 'error',
                statusCode: 404,
                message: '해당 유저는 가입내역이 없습니다!',
            };
            return error;
        }
        const result = await this.userModel.deleteOneUser(userId);
        const returnResult = { status: 'success', statusCode: 200, result };
        return returnResult;
    }

    async getUser(userInfo) {
        const userId = userInfo.id;
        const foundUser = await this.userModel.findById(userId);
        return foundUser;
    }

    async updateUser(userInfo) {
        const hashedPassword = await bcrypt.hash(userInfo.password, 10);
        const updatedUser = await this.userModel.updateOneUser({
            ...userInfo,
            password: hashedPassword,
        });
        return updatedUser;
    }

    async login(loginInfo) {
        const { id, password } = loginInfo;
        const user = await this.userModel.findById(id);
        if (!user) {
            return {
                status: 'error',
                statusCode: 404,
                message: '해당 아이디는 가입 이력이 없습니다!',
            };
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return {
                status: 'error',
                statusCode: 400,
                message: '비밀번호가 올바르지 않습니다!',
            };
        }
        const tokenPayload = { id: user.id, name: user.name };
        const userToken = await handleJWT
            .sign(tokenPayload)
            .then(res => res.token);
        const loginSuccess = {
            status: 'success',
            statusCode: 200,
            token: userToken,
        };
        return loginSuccess;
    }
}

const userService = new UserService();

export default userService;
