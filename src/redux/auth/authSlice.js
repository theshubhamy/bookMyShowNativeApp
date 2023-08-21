import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { getUserData, removeUserData } from "../../services/asyncStorage";
const initialState = {
  loading: false,
  userInfo: getUserData() ? JSON.parse(getUserData()) : null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      removeUserData(); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
// export actions
export const { logout } = authSlice.actions;
export default authSlice.reducer;
