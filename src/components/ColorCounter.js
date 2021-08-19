import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = ({title, value, setValue, increment = 5, minValue = 0, maxValue = 255}) => {

    function onIncrease() {
        setValue(value + increment > maxValue ? maxValue : value + increment)
    }

    function onDecrease() {
        setValue(value - increment < minValue ? minValue : value - increment)
    }

    return <View>
        <Text>{title}: {value}</Text>
        <Button title={`More ${title}`} onPress={onIncrease} />
        <Button title={`Less ${title}`} onPress={onDecrease}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorCounter