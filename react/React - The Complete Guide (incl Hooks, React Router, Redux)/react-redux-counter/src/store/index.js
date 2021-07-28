// import { counterReducer } from "./reducers"; // reducers (functions that contain instructions for the store on how to mutate state, based on a trigger action.type input)
// import { createStore } from "redux"; // old redux method
// const store = createStore(counterSlice.reducer); // old redux method

// Redux Toolkit method
import counterReducer from "./reducers/counter";
import authReducer from "./reducers/auth";
import { configureStore } from "@reduxjs/toolkit";

// Create Global Store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
