import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('')
    return(
        <View>
            <Text>Enter Text : </Text>
            <TextInput 
                style = {styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is : {name}</Text>
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