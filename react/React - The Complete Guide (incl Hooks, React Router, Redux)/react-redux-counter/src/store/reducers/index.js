import { INCREMENT, DECREMENT } from "constants/constants";
/**
 * File that contains all reducers (functions that mutate store)
 */
export const counterReducer = (
  state = { counter: 0, text: "text" },
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }; // increase counter by 1
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }; // decrease counter by 1
    case "text":
      return { ...state, text: "I have changed" };
    default:
      return state;
  }
};
