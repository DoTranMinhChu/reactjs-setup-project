import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'Init value',
}

const initSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = null;
        }
    }
});

export const { setValue, clearValue } = initSlice.actions;
export default initSlice.reducer;