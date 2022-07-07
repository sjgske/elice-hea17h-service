import { userModel } from '../db/index.js';

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async addUser(userInfo) {
        const { id, name, password, gender, height, weight, goalWeight } =
            userInfo;
        const user = await this.userModel.findById(id);
        if (user) {
            throw new Error(
                '해당하는 아이디가 이미 존재합니다. 아이디를 변경해 주세요',
            );
        }
        // const currentpassword = user.password;
        const newInfo = {
            id,
            name,
            password,
            gender,
            height,
            weight,
            goalWeight,
        };
        return await this.userModel.create(newInfo);
    }

    async deleteUser(userId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new Error(
                '가입하신 이력이 없습니다. 다시한번 확인해 주세요!',
            );
        }

        return await this.userModel.deleteOneUser(userId);
    }

    async getUser() {
        return await this.userModel.findAll();
    }

    async getUser(userId) {
        return await this.userModel.findById(userId);
    }

    async updateUser(userInfo) {
        return await this.userModel.updateOneUser(userInfo);
    }

    async deleteUser(userId) {
        return await this.userModel.deleteOneUser(userId);
    }
}

const userService = new UserService(userModel);

export { userService };
