import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { getRandomInt } from '../utils';

const ColorsScreen = () => {
    const [colors, setColors] = React.useState([])

    function handleAddColor() {
        setColors([...colors, `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`])
    }

    function renderColor({item}) {
        const size = 200
        return <View style={{backgroundColor: item, height: size, width: size, marginTop: 10}}><Text>{item}</Text></View>
    }

    return <View>
        <Button title="Add a Color" onPress={handleAddColor} />
        <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item}   
                data={colors} 
                renderItem={renderColor} 
            />
    </View>
}

const styles = StyleSheet.create({})

export default ColorsScreen