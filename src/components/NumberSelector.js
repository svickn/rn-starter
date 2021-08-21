import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const NumberSelector = ({value, setValue}) => {
  return (
    <ScrollView horizontal={true}>
      <TouchableOpacity onPress={() => setValue(value - 1)}>
        <Text style={styles.buttonStyle}>Decrease</Text>
      </TouchableOpacity>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{value}</Text>
      </View>
      <TouchableOpacity onPress={() => setValue(value + 1)}>
        <Text style={styles.buttonStyle}>Increase</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 3,
    margin: 5,
    padding: 5,
    width: 200,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  viewStyle: {
    justifyContent: 'center',
    width: 20,
  },
})

const selectedItemStyle = StyleSheet.compose(
  styles.selectableItem,
  styles.selectedItem,
)

export default NumberSelector
