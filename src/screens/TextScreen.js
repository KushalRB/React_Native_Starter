import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return(
        <View>
            <Text>Enter Passowrd : </Text>
            <TextInput 
                style = {styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password should be atleast 5 characters</Text> : null}
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