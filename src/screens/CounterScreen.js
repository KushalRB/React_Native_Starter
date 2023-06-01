import React, { useState }from "react";
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [count, setCount] = useState(0)
    console.log(setCount)
    return(
        <View>
            <Button 
                title="Increase"
                onPress={() => setCount(count + 1)}
            />
            <Button 
                title="Decrease"
                onPress={() => setCount(count - 1)}
            />
            <Text>Current Counter : {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CounterScreen;


