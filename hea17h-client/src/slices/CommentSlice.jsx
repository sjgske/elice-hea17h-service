/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        deleteOne: (state, action) => {
            state.comments = state.comments.filter(
                comment => comment._id !== action.payload,
            );
        },
    },
});

export const { setComments, deleteOne } = commentSlice.actions;
export default commentSlice.reducer;
