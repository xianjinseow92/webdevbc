import { createSlice } from "@reduxjs/toolkit";

// Counter initialState
const initialCounterState = {
  counter: 0,
  showCounter: true,
  text: "Halo",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    customIncrease(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/**
 * *** ACTIONS FROM REDUCERS ****
 */
export const counterActions = counterSlice.actions; // createSlice creates actions for us based on the reducers passed in.

export default counterSlice.reducer;
