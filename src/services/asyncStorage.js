import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserData = async userData => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getUserData = async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    return userDataString ? JSON.parse(userDataString) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};
