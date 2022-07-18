/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    id: "",
    jwtToken: "",
    role: "user",
    isLoading: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.jwtToken = action.payload;
        }
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
