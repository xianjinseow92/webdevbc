import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  toggleCart: true,
};

const uiSlice = createSlice({
  name: "uiActions",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const uiActionsReducer = uiSlice.reducer

export const uiActions = uiSlice.actions;
export default uiActionsReducer;
