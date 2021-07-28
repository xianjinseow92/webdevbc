import { counterReducer } from "./reducers"; // reducers (functions that contain instructions for the store on how to mutate state, based on a trigger action.type input)
import { createStore } from "redux";

// Create Global Store
const store = createStore(counterReducer);

export default store;