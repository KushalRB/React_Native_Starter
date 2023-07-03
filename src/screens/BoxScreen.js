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
    alignItems: 'flex-start',
    height: 300
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
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 1
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 1
  }
});

export default BoxScreen;
