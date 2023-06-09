import React, {useReducer} from "react";
import { Text, View, StyleSheet, Button} from "react-native"
import ColorCounter from "../components/ColorCounter";

const COLOR_CONSTANT = 10

const reducer = (state, action) => {
    switch(action.colorToChange){
        case 'red':
            return {...state, red: state.red + action.amount}
        case 'green': 
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
            return state
    }

}

const SquareScreen = () => {
const [state, dispatch] = useReducer (reducer, {red: 0, green: 0, blue: 0})
    
    return(
        <View>
            <ColorCounter 
                color='Red'
                onIncrease={() =>  dispatch({colorToChange: 'red', amount: COLOR_CONSTANT})}
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_CONSTANT})}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_CONSTANT})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_CONSTANT})}
            />
            <ColorCounter 
                color='Blue'
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_CONSTANT})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_CONSTANT})}
            />
            <View style={{height: 10}}/>
            <Text>Red: {state.red} , Green: {state.green} , Blue: {state.blue}</Text>
            <View style={{height: 10}}/>
             <View 
                style={{
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
                alignItems: 'center',
                justifyContent: 'center'
                }}
            />
        </View>)
}



const styles = StyleSheet.create({

})

export default SquareScreen