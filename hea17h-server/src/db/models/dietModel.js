import mongoose from 'mongoose';
import DietSchema from '../schemas/dietSchema.js';

const { model } = mongoose;
const Diet = model('diets', DietSchema);

class DietModel {
    constructor() {
        this.diet = Diet;
    }

    // 전문가 전용 모든 식단 보기
    async getAllDiet() {
        const allDiet = await this.diet.find({}).populate('user', 'name');
        return allDiet;
    }

    // 자신의 식단 찾아보기
    async findByUser(userId) {
        const userDiet = await this.diet
            .find({ user: userId })
            .populate('user', 'name');
        return userDiet;
    }

    async addDiet(userId, dietInfo) {
        const newDiet = await this.diet.create({ ...dietInfo, user: userId });
        return newDiet;
    }
}

const dietModel = new DietModel();
export default dietModel;
