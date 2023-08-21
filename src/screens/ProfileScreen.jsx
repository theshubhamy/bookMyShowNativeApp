import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={styles.container}>
      <Text>Profile Information:</Text>
      {user ? (
        <View>
          <Text>Name: {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      ) : (
        <Text>Please log in to view your profile.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
