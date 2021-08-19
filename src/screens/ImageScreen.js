import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const images = [
        {
            title: "Forest",
            image: require("../../assets/forest.jpg")
        },
        {
            title: "Beach",
            image: require("../../assets/beach.jpg")
        },
        {
            title: "Mountain",
            image: require("../../assets/mountain.jpg")
        },
    ]

    function renderImageDetail({item}) {
        return <ImageDetail title={item.title} image={item.image} />
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