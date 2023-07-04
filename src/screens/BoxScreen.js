import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View>
    <View style={styles.viewStyleOne}>
      <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "red",

          opacity: 0.3,
        }}
      />
      
      <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "purple",
          opacity: 0.3,
        }}
      />
      
    </View>
    <View
        style={{
          height: 50,
          width: 80,
          backgroundColor: "green",
          opacity: 0.3,
          alignSelf: 'center'
        }}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  viewStyleOne: {
   
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 8,
    
    justifyContent: 'space-between'
  },
  viewStyleTwo: {
    alignSelf: "flex-start",
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
