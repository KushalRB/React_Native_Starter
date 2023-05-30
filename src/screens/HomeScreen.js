import React from "react";
import { Text, StyleSheet, View, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  console.log('the props is', props.navigation)
  return  (
  <View>
    <Button 
      title = "Go to Components Demo"
      onPress={() => props.navigation.navigate('Components')}
    />
    <TouchableOpacity 
      onPress={() => props.navigation.navigate('List')}>
      <Text style = {styles.text}>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
