import mongoose from 'mongoose';

const DB_URL = process.env.MONGODB_URL || 'Mongodb서버 주소가 설정되지 않았습니다';

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('정상적으로 MongoDB 서버에 연결되었습니다. ' + DB_URL)
})

db.on('error', (error)=>{
    console.error('MongoDB 연결에 실패하였습니다.\n' + error);
})


export * from './models/userModel.js';
export * from './models/categoryModel.js';
export * from './models/foodModel.js';
