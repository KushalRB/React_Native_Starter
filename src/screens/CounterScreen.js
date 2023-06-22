import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch(action.type){
    case 'change_increase' :
      return {...state, count : state.count + action.payload }
    case 'change_decrease' :
      return {...state, count : state.count + action.payload}
    default :
      return state
  }
}
const COUNTER = 1
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count : 0});
  return (
    <View>
      <Button title="Increase" onPress={() => 
        dispatch({type : 'change_increase', payload : COUNTER})
      } 
      />
      <Button title="Decrease" onPress={() => 
        dispatch({type : 'change_decrease', payload : -1 * COUNTER})
      } 
      />
      <Text>Current Counter : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
