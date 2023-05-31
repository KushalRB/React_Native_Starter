import React from "react";
import { Text, View, StyleSheet} from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail />
            <ImageDetail />
        </View>
    );

}

const styles = StyleSheet.create({
    textStyles:{
        fontSize: 20
    }
})

export default ImageScreen