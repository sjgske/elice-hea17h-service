import mongoose from 'mongoose';
import {userSchema} from '../schemas/userSchema.js';

const model = mongoose.model
const User = model('users', userSchema);

export class UserModel {
    async findById(userId){
        return await User.findOne({ id: userId });
    }

    async create(userInfo){
        return await User.create(userInfo);
    }

    async update({ userId, update }){
        return await User.findOneAndUpdate( {id: userId}, update, {returnOriginal: false});
    }

    async deleteOneUser(userId){
        return await User.deleteOne({ id: userId });
    }
}

const userModel = new UserModel();

export { userModel };