import mongoose from 'mongoose';

const { Schema } = mongoose;
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
            default: '',
        },
        height: {
            type: Number,
            default: 0,
        },
        weight: {
            type: Number,
            default: 0,
        },
        age: {
            type: Number,
            default: 0,
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
        platform: {
            type: String,
            default: 'ordinary',
        },
    },
    {
        timestamps: true,
    },
);

export default UserSchema;
