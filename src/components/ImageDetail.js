import React from "react";
import { Text, View, StyleSheet} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

const ImageDetail = (props) => {
    console.log(props)
    return <Text style = {styles.textStyles}>{props.title}</Text>
}

const styles = StyleSheet.create({
    textStyles:{
        fontSize: 20,
        color: 'darkkhaki'
    }
})

export default ImageDetail