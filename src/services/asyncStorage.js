import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserData = async userData => {
  await AsyncStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = async () => {
  const userData = await AsyncStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = async () => {
  await AsyncStorage.removeItem('userData');
};
