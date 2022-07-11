import mongoose from 'mongoose';
import { FoodSchema } from '../schemas/foodSchema.js';

const model = mongoose.model;
const Food = model('food', FoodSchema);

export class FoodModel {
    async findAll() {
        const foods = await Food.find({});
        return foods;
    }

    async findById(foodId) {
        const food = await Food.findById({ _id: foodId });
        return food;
    }

    async findByName(foodName) {
        const food = await Food.findOne({ name: foodName }).populate(
            'category',
            'name',
        );
        return food;
    }

    async findByNameEng(foodNameEng) {
        const food = await Food.findOne({ nameEng: foodNameEng }).populate(
            'category',
            'name',
        );
        return food;
    }

    async findByCategory(categoryId) {
        const foods = await Food.find({ category: categoryId });
        return foods;
    }

    async countfood() {
        const counts = await Food.countDocuments({});
        return counts;
    }

    async create(foodId) {
        const createdNew = await Food.create(foodId);
        return createdNew;
    }

    async update({ foodId, update }) {
        const filter = { _id: foodId };
        const option = { returnOriginal: false };

        const updatedfood = await Food.findOneAndUpdate(filter, update, option);
        return updatedfood;
    }

    async delete(foodId) {
        const del = await Food.findOneAndDelete({ _id: foodId });
        return del;
    }
}

const foodModel = new FoodModel();

export { foodModel };
