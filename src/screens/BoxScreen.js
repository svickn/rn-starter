import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 5,
    borderColor: 'red',
    margin: 20,
  },
})

export default BoxScreen
