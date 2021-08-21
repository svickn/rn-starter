import React from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'
import {getRandomInt} from '../utils'

const SquareScreen = () => {
  const [increment, setIncrement] = React.useState(1)
  const [red, setRed] = React.useState(getRandomInt(255))
  const [green, setGreen] = React.useState(getRandomInt(255))
  const [blue, setBlue] = React.useState(getRandomInt(255))
  const size = 200

  function handleRngPress() {
    setRed(getRandomInt(255))
    setGreen(getRandomInt(255))
    setBlue(getRandomInt(255))
  }

  return (
    <View>
      <Button title="RNG!" onPress={handleRngPress} increment={increment} />
      <ColorCounter
        title="Increment"
        value={increment}
        setValue={setIncrement}
        increment={1}
        maxValue={10}
        minValue={1}
      />
      <ColorCounter
        title="Red"
        value={red}
        setValue={setRed}
        increment={increment}
      />
      <ColorCounter
        title="Green"
        value={green}
        setValue={setGreen}
        increment={increment}
      />
      <ColorCounter
        title="Blue"
        value={blue}
        setValue={setBlue}
        increment={increment}
      />
      <View
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          height: size,
          width: '100%',
          marginTop: 10,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
