import { createSlice } from "@reduxjs/toolkit";

// Authentication initialState
const initialAuthState = {
  isAuthenticated: false,
};

/**
 * *** REDUCERS ****
 */
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

/**
 * *** ACTIONS FROM REDUCERS ****
 */
export const authActions = authSlice.actions;

export default authSlice.reducer;