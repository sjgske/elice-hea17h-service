import { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
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
        age: {
            type: Number,
            required: true,
        },
        goal: {
            type: Number,
            default: 0,
        },
        activeLevel: {
            type: Number,
            default: 0,
        },
        role: {
            type: String,
            default: 'user',
        },
    },
    {
        timestamps: true,
    },
);

export default UserSchema;
