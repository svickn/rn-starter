import React from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'

const TextScreen = () => {
  const [name, setName] = React.useState('')

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setName}
      />
      <Text>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
