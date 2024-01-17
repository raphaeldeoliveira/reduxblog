import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        increment3: (state) => {
            state.count += 3;
        },
        decrement3: (state) => {
            state.count -= 3;
        },
        clear: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
})

// declaração da export das actions para serem usadas pelo componente funcional
export const { increment, decrement, increment3, decrement3, clear, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer