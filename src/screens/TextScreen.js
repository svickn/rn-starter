import React from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = React.useState('')

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      {password.length >= 5 ? null : (
        <Text>Password must be 5 or more characters!</Text>
      )}
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
