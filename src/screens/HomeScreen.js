import React from "react";
import { Text, StyleSheet, View, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return  (
  <View>
    <Button 
      title = "Go to Components Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Button 
      title = "Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
  </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
