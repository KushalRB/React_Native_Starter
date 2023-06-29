import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.testStyle}>Box Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    borderWidth : 4,
    borderColor : 'black',
    margin : 8,
    padding: 2
  },
  testStyle : {
    borderWidth : 2,
    borderColor : 'green',
    margin : 28,
    padding: 24
  }
})

export default BoxScreen
