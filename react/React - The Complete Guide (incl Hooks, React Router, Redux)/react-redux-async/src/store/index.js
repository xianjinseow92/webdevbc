// Store-related
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "store/reducers/cartReducer";
import cartUIReducer from "./reducers/cart-ui";

// Create store, with reducers (instructions to mutate store)
const reducers = {
    cart: cartReducer,
    cartUI: cartUIReducer
};

const store = configureStore({
    reducer: reducers
});

export default store;