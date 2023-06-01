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
    <Button 
      title = "Go to Image Screen"
      onPress={()=>navigation.navigate('Image')}
    />
    <Button 
      title = "Go to Counter Demo"
      onPress={()=>navigation.navigate('Counter')}  
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
