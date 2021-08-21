import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import NumberSelector from '../components/NumberSelector'
import SettingSelector from '../components/SettingSelector'

const SimpleBoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}>
        <Text>Child #1</Text>
      </View>
      <View style={styles.viewTwoStyle}>
        <Text>Child #2</Text>
      </View>
      <View style={styles.viewThreeStyle}>
        <Text>Child #3</Text>
      </View>
    </View>
  )
}

const childViewStyles = {
  borderWidth: 3,
  borderColor: 'red',
  height: 150,
  width: 150,
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    //height: 300,
    height: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    ...childViewStyles,
    backgroundColor: 'coral',
  },
  // viewTwoParent: {
  //   height: 300,
  //   justifyContent: 'flex-end'
  // },
  viewTwoStyle: {
    ...childViewStyles,
    backgroundColor: 'darkseagreen',
    // alignSelf: 'flex-end'
    marginTop: 150,
  },
  viewThreeStyle: {
    ...childViewStyles,
    backgroundColor: 'orchid',
  },
})

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black',
//     height: 500,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   viewOneStyle: {
//     ...childViewStyles,
//     backgroundColor: 'coral',
//   },
//   viewTwoStyle: {
//     ...childViewStyles,
//     backgroundColor: 'darkseagreen',
//     top: 150,
//   },
//   viewThreeStyle: {
//     ...childViewStyles,
//     backgroundColor: 'orchid',
//   },
// })

export default SimpleBoxScreen
