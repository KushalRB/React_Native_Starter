import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.testStyle}>Child #1</Text>
      <Text style={styles.testStyle}>Child #2</Text>
      <Text style={styles.testStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "black",
    margin: 8,
    padding: 8,
    alignItems: 'center'
  },
  testStyle: {
    borderWidth: 4,
    borderColor: "green",
    padding: 16,
  },
});

export default BoxScreen;
