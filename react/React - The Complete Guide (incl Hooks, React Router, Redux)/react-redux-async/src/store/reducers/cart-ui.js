import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  showCart: true,
};

const cartUISlice = createSlice({
  name: "cartUI",
  initialState: initialUIState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const cartUIReducer = cartUISlice.reducer

export const cartUIActions = cartUISlice.actions;
export default cartUIReducer;
