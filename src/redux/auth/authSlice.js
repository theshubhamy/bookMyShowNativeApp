import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from './authActions';

const initialState = {
  loading: false,
  userInfo: null, // Initialize userInfo with null
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
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

export const {logout} = authSlice.actions;
export default authSlice.reducer;
