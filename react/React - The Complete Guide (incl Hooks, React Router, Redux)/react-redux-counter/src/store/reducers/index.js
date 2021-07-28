// import {
//   INCREMENT,
//   DECREMENT,
//   CUSTOM_INCREASE,
//   TOGGLE_COUNTER,
// } from "constants/constants";

import { createSlice } from "@reduxjs/toolkit";

/**
 * *** INITIAL STATES ****
 */
// Counter initialState
const initialCounterState = {
  counter: 0,
  showCounter: true,
  text: "Halo",
};
// Authentication initialState
const initialAuthState = {
  isAuthenticated: false,
};

/**
 * *** REDUCERS ****
 */
export const counterSlice = createSlice({
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

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

/**
 * *** ACTIONS FROM REDUCERS ****
 */
export const counterActions = counterSlice.actions; // createSlice creates actions for us based on the reducers passed in.
/** Example */
// const incrementAction =  counterSlice.actions.increment(); // { type: "some-unique-identifier-known-to-redux-toolkit"}
export const authActions = authSlice.actions;

// /**
//  * File that contains all reducers (functions that mutate store)
//  */
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 }; // increase counter by 1
//     case DECREMENT:
//       return { ...state, counter: state.counter - 1 }; // decrease counter by 1
//     case CUSTOM_INCREASE:
//       return { ...state, counter: state.counter + action.value }; // increase counter by a dynamic value
//     case "text":
//       return { ...state, text: "I have changed" };
//     case TOGGLE_COUNTER:
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
