import React from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'

const INITIAL_COUNT = 0
const INCREMENT_AMOUNT = 1

const actions = {
  increment: 'increment',
  decrement: 'decrement',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.increment:
      return {...state, count: state.count + action.payload}
    case actions.decrement:
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}

const CounterReducerScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, {count: INITIAL_COUNT})
  const {count} = state

  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button
          title="Increase"
          onPress={() =>
            dispatch({type: actions.increment, payload: INCREMENT_AMOUNT})
          }
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Decrease"
          onPress={() =>
            dispatch({type: actions.decrement, payload: INCREMENT_AMOUNT})
          }
        />
      </View>
      <Text style={styles.textStyle}>Current Count:</Text>
      <Text style={styles.textStyle}>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingBottom: 20,
  },
  textStyle: {
    fontSize: 40,
    textAlign: 'center',
  },
})

export default CounterReducerScreen
