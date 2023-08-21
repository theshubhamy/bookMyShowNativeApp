import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
