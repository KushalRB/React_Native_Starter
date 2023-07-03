import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "black",
    height: 400,
    flexDirection: 'row',
  },
  testStyle: {
    borderWidth: 4,
    borderColor: "green",
  },
  textOneStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 2
  },
  textTwoStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 3
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 5
  }
});

export default BoxScreen;
