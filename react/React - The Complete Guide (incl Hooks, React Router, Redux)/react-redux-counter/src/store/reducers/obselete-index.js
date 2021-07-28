// import {
//   INCREMENT,
//   DECREMENT,
//   CUSTOM_INCREASE,
//   TOGGLE_COUNTER,
// } from "constants/constants";

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
