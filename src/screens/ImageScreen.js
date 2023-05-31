import React from "react";
import { Text, View, StyleSheet} from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title = 'Forest' imageSource = {require('../../assets/forest.jpg')}/>
            <ImageDetail title = 'Beach' imageSource = {require('../../assets/beach.jpg')}/>
            <ImageDetail title = 'Mountain' imageSource = {require('../../assets/mountain.jpg')}/>
        </View>
    );

}

const styles = StyleSheet.create({
    textStyles:{
        fontSize: 20
    }
})

export default ImageScreen