import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/store';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set your desired background color
  },
});
export default App;
