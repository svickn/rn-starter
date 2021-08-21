import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import NumberSelector from '../components/NumberSelector'
import SettingSelector from '../components/SettingSelector'

const flexDirectionsOptions = {
  column: 'column', //default
  row: 'row',
  columnReverse: 'column-reverse',
  rowReverse: 'row-reverse',
}

const justifyContentsOptions = {
  flexStart: 'flex-start', //default
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
}

const alignItemsOptions = {
  stretch: 'stretch', //default
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  baseline: 'baseline',
}

const positionOptions = {
  relative: 'relative', //default
  absolute: 'absolute',
}

const BoxScreen = () => {
  const [direction, setDirection] = React.useState(flexDirectionsOptions.column)
  const [justify, setJustify] = React.useState(justifyContentsOptions.flexStart)
  const [align, setAlign] = React.useState(alignItemsOptions.stretch)
  const [flexOne, setFlexOne] = React.useState(0)
  const [flexTwo, setFlexTwo] = React.useState(0)
  const [flexThree, setFlexThree] = React.useState(0)
  const [alignSelfOne, setAlignSelfOne] = React.useState(
    alignItemsOptions.stretch,
  )
  const [alignSelfTwo, setAlignSelfTwo] = React.useState(
    alignItemsOptions.stretch,
  )
  const [alignSelfThree, setAlignSelfThree] = React.useState(
    alignItemsOptions.stretch,
  )
  const [positionOne, setPositionOne] = React.useState(positionOptions.relative)
  const [positionTwo, setPositionTwo] = React.useState(positionOptions.relative)
  const [positionThree, setPositionThree] = React.useState(
    positionOptions.relative,
  )

  const styles = getStyles({
    direction,
    align,
    justify,
    flexOne,
    flexTwo,
    flexThree,
    alignSelfOne,
    alignSelfTwo,
    alignSelfThree,
    positionOne,
    positionTwo,
    positionThree,
  })

  return (
    <View>
      <Text>Flex Direction</Text>
      <SettingSelector
        value={direction}
        setValue={setDirection}
        options={flexDirectionsOptions}
      />
      <Text>Justify Contents</Text>
      <SettingSelector
        value={justify}
        setValue={setJustify}
        options={justifyContentsOptions}
      />
      <Text>Align Items</Text>
      <SettingSelector
        value={align}
        setValue={setAlign}
        options={alignItemsOptions}
      />
      <Text>Flex</Text>
      <NumberSelector value={flexOne} setValue={setFlexOne} />
      <NumberSelector value={flexTwo} setValue={setFlexTwo} />
      <NumberSelector value={flexThree} setValue={setFlexThree} />
      <Text>Align Self</Text>
      <SettingSelector
        value={alignSelfOne}
        setValue={setAlignSelfOne}
        options={alignItemsOptions}
      />
      <SettingSelector
        value={alignSelfTwo}
        setValue={setAlignSelfTwo}
        options={alignItemsOptions}
      />
      <SettingSelector
        value={alignSelfThree}
        setValue={setAlignSelfThree}
        options={alignItemsOptions}
      />
      <Text>Position</Text>
      <SettingSelector
        value={positionOne}
        setValue={setPositionOne}
        options={positionOptions}
      />
      <SettingSelector
        value={positionTwo}
        setValue={setPositionTwo}
        options={positionOptions}
      />
      <SettingSelector
        value={positionThree}
        setValue={setPositionThree}
        options={positionOptions}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1 (Flex {flexOne})</Text>
        <Text style={styles.textTwoStyle}>Child #2 (Flex {flexTwo})</Text>
        <Text style={styles.textThreeStyle}>Child #3 (Flex {flexThree})</Text>
      </View>
    </View>
  )
}

const getStyles = ({
  direction,
  align,
  justify,
  flexOne,
  flexTwo,
  flexThree,
  alignSelfOne,
  alignSelfTwo,
  alignSelfThree,
  positionOne,
  positionTwo,
  positionThree,
}) => {
  return {
    viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 300,
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
    },
    textOneStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: flexOne,
      alignSelf: alignSelfOne,
      position: positionOne,
    },
    textTwoStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: flexTwo,
      alignSelf: alignSelfTwo,
      position: positionTwo,
    },
    textThreeStyle: {
      borderWidth: 3,
      borderColor: 'red',
      flex: flexThree,
      alignSelf: alignSelfThree,
      position: positionThree,
    },
  }
}

export default BoxScreen
