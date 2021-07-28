import { INCREMENT, DECREMENT, CUSTOM_INCREASE } from "constants/constants";
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
    case CUSTOM_INCREASE:
      return { ...state, counter: state.counter + action.value } // increase counter by a dynamic value
    case "text":
      return { ...state, text: "I have changed" };
    default:
      return state;
  }
};
