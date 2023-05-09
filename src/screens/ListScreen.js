import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '20'},
        {name: 'Friend #2', age: '23'},
        {name: 'Friend #3', age: '26'},
        {name: 'Friend #4', age: '32'},
        {name: 'Friend #5', age: '33'},
        {name: 'Friend #6', age: '29'},
        {name: 'Friend #7', age: '20'},
        {name: 'Friend #8', age: '28'},
        {name: 'Friend #9', age: '32'},
        {name: 'Friend #10', age: '30'}

    ]
    return (<FlatList 
        data={friends} 
        keyExtractor={friend => friend.name}
        renderItem={({item}) => {
            return(
            <View>
                <Text style = {styles.textSyle}>{item.name} - Age {item.age}</Text>
                
            </View>
            );
        }}>
    </FlatList>);
}

const styles = StyleSheet.create({
    textSyle: {
        marginVertical: 20
    }
});

export default ListScreen;
