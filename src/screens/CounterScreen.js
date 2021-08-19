import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = React.useState(0)

    return <View>
        <View style={styles.buttonStyle}>
            <Button  title="Increment" onPress={() => setCount(count+1)} />
        </View>
        <View style={styles.buttonStyle}>
            <Button  title="Decrement" onPress={() => setCount(count-1)} />
        </View>
        <Text style={styles.textStyle}>Current Count:</Text>
        <Text style={styles.textStyle}>{count}</Text>
    </View>
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingBottom: 20
  },
  textStyle: {
    fontSize: 40,
    textAlign:'center'
  }
})

export default CounterScreen