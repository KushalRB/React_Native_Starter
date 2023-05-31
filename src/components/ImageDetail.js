import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

const ImageDetail = (props) => {
    return (
        <View>
            <Image source = {props.imageSource}/>
            <Text style = {styles.textStyles}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyles:{
        fontSize: 20,
        color: 'darkkhaki'
    }
})

export default ImageDetail