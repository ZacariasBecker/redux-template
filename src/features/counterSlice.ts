// xxxSlice.ts   convenção

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementWithAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    },
});

export const { increment, decrement, incrementWithAmount } = counterSlice.actions;

export default counterSlice.reducer;