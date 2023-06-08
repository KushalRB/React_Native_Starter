import React, {useState} from "react";
import { Text, View, StyleSheet, Button} from "react-native"
import ColorCounter from "../components/ColorCounter";

const COLOR_CONSTANT = 10

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch(color){
            case 'Red' :
                (red + change >= 0 && red + change <= 255) ? setRed(red + change) : null
                return;
            case 'Green' :
                (green + change >= 0 && green + change <= 255) ? setGreen(green + change) : null
                return;
            case 'Blue' :
                (blue + change >= 0 && blue + change <= 255) ? setBlue(blue + change) : null
                return;
            default:
                return;
        }

    }
    
    return(
        <View>
            <ColorCounter 
                color='Red'
                onIncrease={() => setColor('Red', COLOR_CONSTANT)}
                onDecrease={() => setColor('Red', -COLOR_CONSTANT)}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => setColor('Green', COLOR_CONSTANT)}
                onDecrease={() => setColor('Green', -COLOR_CONSTANT)}
            />
            <ColorCounter 
                color='Blue'
                onIncrease={() => setColor('Blue', COLOR_CONSTANT)}
                onDecrease={() => setColor('Blue', -COLOR_CONSTANT)}
            />
            <View style={{height: 10}}/>
            <Text>Red: {red} , Green: {green} , Blue: {blue}</Text>
            <View style={{height: 10}}/>
             <View 
                style={{
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`,
                alignItems: 'center',
                justifyContent: 'center'
                }}
            />
        </View>)
}



const styles = StyleSheet.create({

})

export default SquareScreen