import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FoodSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        nameEng: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: 'categories',
            required: true,
        },
        info: {
            type: [
                new Schema(
                    {
                        unitName: {
                            type: String,
                            required: false,
                        },
                        grams: {
                            type: Number,
                            required: false,
                        },
                    },
                    {
                        _id: false,
                    },
                ),
            ],
            requred: false,
        },
    },
    {
        collection: 'foods',
        timestamps: true,
    },
);

export { FoodSchema };
