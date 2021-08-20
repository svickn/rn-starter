import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorReducerCounter from '../components/ColorReducerCounter';
import { getRandomInt } from '../utils';

const initialState = {
    red: getRandomInt(255),
    green: getRandomInt(255),
    blue: getRandomInt(255),
    increment: 1
}

const MAX_COLOR_VALUE = 255
const MIN_COLOR_VALUE = 0
const MAX_INCREMENT = 10
const MIN_INCREMENT = 1
const INCREMENT_INCREMENT = 1
const MODIFIER_INCREASE = 1
const MODIFIER_DECREASE = -MODIFIER_INCREASE

const calcNewValue = (value, minValue, maxValue, increment) => {
    return value + increment > maxValue 
        ? maxValue 
        : value + increment < minValue
            ? minValue
            : value + increment
}

const actions = {
    red: "red",
    blue: "blue",
    green: "green",
    increment: "increment",
    reset: "reset"
}

const reducer = (state, action) => {
    switch(action.type) {
        case actions.red:
            return {
                ...state,
                red: calcNewValue(state.red, MIN_COLOR_VALUE, MAX_COLOR_VALUE, action.modifier * state.increment)
            }
        case actions.blue:
            return {
                ...state,
                blue: calcNewValue(state.blue, MIN_COLOR_VALUE, MAX_COLOR_VALUE, action.modifier * state.increment)
            }
        case actions.green:
            return {
                ...state,
                green: calcNewValue(state.green, MIN_COLOR_VALUE, MAX_COLOR_VALUE, action.modifier * state.increment)
            }
        case actions.increment:
            return {
                ...state,
                increment: calcNewValue(state.increment, MIN_INCREMENT, MAX_INCREMENT, action.modifier * INCREMENT_INCREMENT)
            }
        case actions.reset:
            return {
                red: getRandomInt(255),
                green: getRandomInt(255),
                blue: getRandomInt(255),
                increment: state.increment
            }
        default:
            return state
    }
}

const SquareReducerScreen = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const { red, green, blue, increment } = state
    const size = 200

    return <View>
        <Button title="RNG!" onPress={() => dispatch({type:actions.reset})} />
        <ColorReducerCounter title="Increment" 
            value={increment} 
            onIncrease={() => dispatch({type:actions.increment, modifier: MODIFIER_INCREASE})} 
            onDecrease={() => dispatch({type:actions.increment, modifier: MODIFIER_DECREASE})} 
        />
        <ColorReducerCounter title="Red" 
            value={red} 
            onIncrease={() => dispatch({type:actions.red, modifier: MODIFIER_INCREASE})} 
            onDecrease={() => dispatch({type:actions.red, modifier: MODIFIER_DECREASE})} 
        />
        <ColorReducerCounter title="Green" 
            value={green} 
            onIncrease={() => dispatch({type:actions.green, modifier: MODIFIER_INCREASE})} 
            onDecrease={() => dispatch({type:actions.green, modifier: MODIFIER_DECREASE})} 
        />
        <ColorReducerCounter title="Blue" 
            value={blue} 
            onIncrease={() => dispatch({type:actions.blue, modifier: MODIFIER_INCREASE})} 
            onDecrease={() => dispatch({type:actions.blue, modifier: MODIFIER_DECREASE})} 
        />
        <View style={{backgroundColor: `rgb(${red},${green},${blue})`, height: size, width: '100%', marginTop: 10}} />
    </View>
}

const styles = StyleSheet.create({})

export default SquareReducerScreen