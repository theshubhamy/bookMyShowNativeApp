import React from "react";
import { useDispatch } from "react-redux";
import { View, Button } from "react-native";
import { loginWithGoogleAndStoreData } from "../../redux/auth/authActions";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogleAndStoreData());
  };

  return (
    <View>
      <Button title="Login with Google" onPress={() => handleGoogleLogin()} />
    </View>
  );
};

export default LoginScreen;
