import { createSelector } from '@reduxjs/toolkit'

const selectInit = (state) => state.init;
const selectInitValue = (state) => state.init.value;

export const getInitSelector = createSelector(selectInit, (state) => {
    return state;
})

export const getInitValueSelector = createSelector(selectInitValue, (state) => {
    return state;
})