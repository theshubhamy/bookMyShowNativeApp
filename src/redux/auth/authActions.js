import {createAsyncThunk} from '@reduxjs/toolkit';
import {auth, googleProvider} from '../../services/firebase';
import {saveUserData} from '../../services/asyncStorage';
export const userLogin = createAsyncThunk(
  'userLogin',
  async (_, {rejectWithValue}) => {
    try {
      // make request to backend
      const response = await await auth.signInWithPopup(googleProvider);
      // store user's token in local storage
      saveUserData(response.user);
      return response?.user;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
