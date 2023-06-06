import React, {useState} from "react";
import { Text, View, StyleSheet, Button} from "react-native"
import { FlatList } from "react-native-gesture-handler";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return(
        <View>
            <ColorCounter color='Red'/>
            <ColorCounter color='Green'/>
            <ColorCounter color='Blue'/>
        </View>)
}



const styles = StyleSheet.create({

})

export default SquareScreen