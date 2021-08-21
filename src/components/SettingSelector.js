import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const SettingSelector = ({value, setValue, options}) => {
  const items = Object.keys(options)

  function renderListItem({item}) {
    return <Text>{options[item]}</Text>
  }

  return (
    <ScrollView horizontal={true}>
      {items.map(item => (
        <TouchableOpacity onPress={() => setValue(options[item])}>
          <Text
            style={
              options[item] === value
                ? selectedItemStyle
                : styles.selectableItem
            }
            key={item}
          >
            {options[item]}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  selectableItem: {
    borderColor: 'purple',
    borderWidth: 3,
    margin: 5,
    padding: 5,
    width: 200,
    textAlign: 'center',
  },
  selectedItem: {
    borderColor: 'green',
  },
})

const selectedItemStyle = StyleSheet.compose(
  styles.selectableItem,
  styles.selectedItem,
)

export default SettingSelector
