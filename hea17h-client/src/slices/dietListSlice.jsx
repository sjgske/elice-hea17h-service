/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boxIsToggle: false,
    modalIsOpen: false,
    mealInfo: '',
};

export const dietListSlice = createSlice({
    name: 'dietList',
    initialState,
    reducers: {
        setMealInfo: (state, action) => {
            if (state.mealInfo === action.payload) {
                state.boxIsToggle = !state.boxIsToggle;
            } else {
                state.boxIsToggle = true;
            }
            state.mealInfo = action.payload;
        },
        setModalIsOpen: (state, action) => {
            state.setModalIsOpen = action.payload;
        },
    },
});

export const { setMealInfo, setModalIsOpen } = dietListSlice.actions;
export default dietListSlice.reducer;
