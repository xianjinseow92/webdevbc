import {
  INCREMENT,
  DECREMENT,
  CUSTOM_INCREASE,
  TOGGLE_COUNTER,
} from "constants/constants";

import { createSlice } from "@reduxjs.toolkit";

// Initial State(s)
const initialState = {
  counter: 0,
  showCounter: true,
  text: "Halo",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    customIncrease(state, action) {
      state.counter = state.counter + action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
