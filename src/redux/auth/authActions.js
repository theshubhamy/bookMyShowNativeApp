import {createAsyncThunk} from '@reduxjs/toolkit';
import {saveUserData} from '../../services/asyncStorage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {googleProvider, auth} from '../../services/firebase';

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (_, {rejectWithValue}) => {
    try {
      const {idToken} = await GoogleSignin.signIn(googleProvider);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      console.log(googleCredential);
      const res = auth().signInWithCredential(googleCredential);
      console.log(res);
      await saveUserData(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
