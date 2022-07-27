import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import commentReducer from './slices/CommentSlice';

const Store = configureStore({
    reducer: {
        user: userReducer,
        comment: commentReducer,
    },
});

export default Store;
