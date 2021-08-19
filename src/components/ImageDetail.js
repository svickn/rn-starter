import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({title, image, score}) => {
    return <View>
        <Image source={image} />
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetail