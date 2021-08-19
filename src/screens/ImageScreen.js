import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const images = [
        {
            title: "Forest",
            image: require("../../assets/forest.jpg"),
            score: 10
        },
        {
            title: "Beach",
            image: require("../../assets/beach.jpg"),
            score: 8
        },
        {
            title: "Mountain",
            image: require("../../assets/mountain.jpg"),
            score: 9
        },
    ]

    function renderImageDetail({item}) {
        return <ImageDetail {...item}/>
    }

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.title}   
                data={images} 
                renderItem={renderImageDetail} 
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen