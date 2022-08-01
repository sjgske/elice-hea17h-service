import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import commentReducer from './slices/CommentSlice';
import dietListReducer from './slices/dietListSlice';

const Store = configureStore({
    reducer: {
        user: userReducer,
        comment: commentReducer,
        dietList: dietListReducer,
    },
});

export default Store;
