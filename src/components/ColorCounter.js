import React, {useState} from "react";
import { Text, View, StyleSheet, Button} from "react-native"
import { FlatList } from "react-native-gesture-handler";

const ColorCounter = ({color}) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}/>
            <Button title={`Decrease ${color}`}/>
        </View>
        )
}



const styles = StyleSheet.create({

})

export default ColorCounter