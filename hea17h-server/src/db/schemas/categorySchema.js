import { Schema } from 'mongoose';

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: false,
        },
    },
    {
        collection: 'categories',
        timestamps: true,
    },
);

export default CategorySchema;
