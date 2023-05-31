import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source = {imageSource}/>
            <Text style = {styles.textStyles}>{title}</Text>
            <Text style = {styles.textStyles}>Image score - {score}</Text>
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