// Store-related
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "store/reducers/cartReducer";

// Create store, with reducers (instructions to mutate store)
const reducers = {
    cart: cartReducer
};

const store = configureStore({
    reducer: reducers
});

export default store;