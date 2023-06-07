import React, {useState} from "react";
import { Text, View, StyleSheet, Button} from "react-native"
import ColorCounter from "../components/ColorCounter";

const COLOR_CONSTANT = 10

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    
    return(
        <View>
            <ColorCounter 
                color='Red'
                onIncrease={() => setRed(red + COLOR_CONSTANT)}
                onDecrease={() => setRed(red - COLOR_CONSTANT)}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => setGreen(green + COLOR_CONSTANT)}
                onDecrease={() => setGreen(green - COLOR_CONSTANT)}
            />
            <ColorCounter 
                color='Blue'
                onIncrease={() => setBlue(blue + COLOR_CONSTANT)}
                onDecrease={() => setBlue(blue - COLOR_CONSTANT)}
            />
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