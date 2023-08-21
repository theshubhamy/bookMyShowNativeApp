import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Button} from 'react-native';
import {userLogin} from '../../redux/auth/authActions';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(userLogin());
  };

  return (
    <View>
      <Button title="Login with Google" onPress={() => handleGoogleLogin()} />
    </View>
  );
};

export default LoginScreen;
