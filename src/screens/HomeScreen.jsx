import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen, {user?.displayName || 'Guest'}</Text>
      <Button
        title="View Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
