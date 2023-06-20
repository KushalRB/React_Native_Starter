import React from "react";
import { View, Text, StyleSheet } from "react-native";

var name = "Kushal";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native</Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
