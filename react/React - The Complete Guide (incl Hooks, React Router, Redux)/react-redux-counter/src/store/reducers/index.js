import { INCREMENT, DECREMENT } from "counters";
/**
 * File that contains all reducers (functions that mutate store)
 */
export const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }; // increase counter by 1 
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }; // decrease counter by 1
    default:
      return state;
  }
};
