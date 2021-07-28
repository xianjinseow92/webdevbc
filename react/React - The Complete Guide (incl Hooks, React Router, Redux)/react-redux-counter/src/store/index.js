// import { counterReducer } from "./reducers"; // reducers (functions that contain instructions for the store on how to mutate state, based on a trigger action.type input)
// import { createStore } from "redux"; // old redux method
// const store = createStore(counterSlice.reducer); // old redux method

// Redux Toolkit method
import { counterSlice } from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

// Create Global Store
const store = configureStore({
    reducer: counterSlice.reducer
})


export default store;