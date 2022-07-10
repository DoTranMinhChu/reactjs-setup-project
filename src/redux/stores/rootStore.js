import { configureStore } from '@reduxjs/toolkit';
import initReducer from '../slices/initSlice';

export const store = configureStore({
    reducer: {
        init : initReducer
    },
});