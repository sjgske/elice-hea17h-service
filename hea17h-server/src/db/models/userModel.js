import mongoose from 'mongoose';
import UserSchema from '../schemas/userSchema.js';

const { model } = mongoose;
const User = model('users', UserSchema);

class UserModel {
    constructor() {
        this.User = User;
    }

    async findById(userId) {
        const foundUser = await this.User.findOne({ id: userId });
        return foundUser;
    }

    async findAll() {
        const foundUsersArray = await this.User.find({});
        return foundUsersArray;
    }

    async create(userInfo) {
        const newUser = await this.User.create(userInfo);
        return newUser;
    }

    async deleteOneUser(userId) {
        const deleteUserResult = await this.User.deleteOne({ id: userId });
        return deleteUserResult;
    }

    async updateUser(userInfo) {
        const updatedUserInfo = await this.User.findOneAndUpdate(
            { id: userInfo.id },
            userInfo,
            {
                new: true,
            },
        );
        return updatedUserInfo;
    }

    async addExpert(userInfo) {
        const updatedInfo = await this.User.findOneAndUpdate(
            { id: userInfo.id },
            { role: 'expert' },
            {
                new: true,
            },
        );
        return updatedInfo;
    }
}

const userModel = new UserModel();

export default userModel;
