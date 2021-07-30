// Store-related
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "store/reducers/cartReducer";
import uiActionsReducer from "./reducers/ui-actions";

// Create store, with reducers (instructions to mutate store)
const reducers = {
    cart: cartReducer,
    uiActions: uiActionsReducer
};

const store = configureStore({
    reducer: reducers
});

export default store;