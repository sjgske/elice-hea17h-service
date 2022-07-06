import mongoose from 'mongoose';
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        id:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        goalWeight:{
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

export { userSchema };