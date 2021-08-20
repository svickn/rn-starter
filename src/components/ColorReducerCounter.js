import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorReducerCounter = ({title, value, onIncrease, onDecrease}) => {

    return <View>
        <Text>{title}: {value}</Text>
        <Button title={`More ${title}`} onPress={() => onIncrease()} />
        <Button title={`Less ${title}`} onPress={() => onDecrease()}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorReducerCounter