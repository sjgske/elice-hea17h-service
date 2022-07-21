import bcrypt from 'bcrypt';
import { handleJWT } from '../utils/index.js';
import { userModel, certificateModel } from '../db/index.js';

class UserService {
    constructor() {
        this.userModel = userModel;
        this.certificateModel = certificateModel;
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
            platform,
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
            platform,
        };
        const newUser = await this.userModel.create(newInfo);
        return newUser;
    }

    async deleteUser(inputId, inputPw) {
        const user = await this.userModel.findById(inputId);
        if (!user) {
            const error = {
                status: 'error',
                statusCode: 404,
                message: '해당 유저는 가입내역이 없습니다!',
            };
            return error;
        }
        const isPasswordCorrect = await bcrypt.compare(inputPw, user.password);
        if (!isPasswordCorrect) {
            return {
                status: 'error',
                statusCode: 400,
                message: '비밀번호가 올바르지 않습니다!',
            };
        }
        const result = await this.userModel.deleteOneUser(inputId);
        const returnResult = { status: 'success', statusCode: 200, result };
        return returnResult;
    }

    async getUser(userInfo) {
        const userId = userInfo.id;
        const foundUser = await this.userModel.findById(userId);
        return foundUser;
    }

    async updateUser(userInfo) {
        if (userInfo.password) {
            const hashedPassword = await bcrypt.hash(userInfo.password, 10);
            const updatedUser = await this.userModel.updateUser({
                ...userInfo,
                password: hashedPassword,
            });
            return updatedUser;
        }
        const updatedUser = await this.userModel.updateUser({
            ...userInfo,
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

    async addExpert(userInfo, certificateInfo) {
        const updatedExpert = await this.userModel.addExpert(userInfo);
        const addCertificate = await this.certificateModel.addCertificate(
            updatedExpert,
            certificateInfo,
        );
        if (!updatedExpert && !addCertificate) {
            return {
                status: 'error',
                statusCode: 400,
                message: '전문가 등록 과정에서 에러가 발생했습니다',
            };
        }
        const result = {
            status: 'success',
            statusCode: 200,
            payload: { user: updatedExpert, certificate: addCertificate },
        };
        return result;
    }

    async getCertificate(userInfo) {
        const user = await this.userModel.findById(userInfo.id);
        if (user.role !== 'expert') {
            return {
                status: 'error',
                statusCode: 400,
                message: '해당 유저는 전문가가 아닙니다!',
            };
        }
        const result = await this.certificateModel.findById(user._id);
        if (!result) {
            return {
                status: 'error',
                statusCode: 404,
                message: '해당 유저에 대한 자격증을 찾을 수 없습니다!',
            };
        }
        return { status: 'success', statusCode: 200, payload: result };
    }
}

const userService = new UserService();

export default userService;
