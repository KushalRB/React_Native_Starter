import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyleOne}>
      <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "red",
          position: 'absolute'
        }}
      />
      <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "blue",
          alignSelf: 'flex-end'
        }}
      />

      <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "green",
          alignSelf: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyleOne: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: 8,
    height: 104,
  },
  viewStyleTwo: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
  },
  testStyle: {
    borderWidth: 4,
    borderColor: "green",
  },
  textOneStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 2,
  },
  textTwoStyle: {
    borderWidth: 4,
    borderColor: "green",
    alignSelf: "stretch",
    textAlign: "center",
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: "green",
    flex: 1,
  },
});

export default BoxScreen;
