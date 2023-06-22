import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    return(
        <View>
            <TextInput style = {styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 16,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        fontSize: 20,
        padding: 8
    }
});

export default TextScreen;