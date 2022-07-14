import mongoose from 'mongoose';

const { Schema } = mongoose;
const DietSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
        },
        totalCalories: {
            type: Number,
        },
        dietFoods: [
            {
                // 아점저 종류
                mealType: {
                    type: String,
                    required: true,
                },
                // 아점저 의 대표사진
                mainImg: {
                    type: String,
                    required: true,
                },
                foods: [
                    {
                        name: {
                            type: String,
                            required: true,
                        },
                        count: {
                            type: Number,
                            default: 100,
                        },
                        foodCalories: {
                            type: Number,
                            default: 0,
                        },
                        foodCarb: {
                            type: Number,
                            default: 0,
                        },
                        foodProtein: {
                            type: Number,
                            default: 0,
                        },
                        foodFat: {
                            type: Number,
                            default: 0,
                        },
                    },
                ],
                mealCalories: {
                    type: Number,
                    default: 0,
                },
                mealCarb: {
                    type: Number,
                    default: 0,
                },
                mealProtein: {
                    type: Number,
                    default: 0,
                },
                mealFat: {
                    type: Number,
                    default: 0,
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);

export default DietSchema;
