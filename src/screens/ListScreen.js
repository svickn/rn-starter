import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'Matt', age: 22, key: 'A'},
    {name: 'Sean', age: 32, key: 'B'},
    {name: 'Stacy', age: 36, key: 'C'},
    {name: 'Juliet', age: 25, key: 'D'},
    {name: 'Paul', age: 45, key: 'E'},
    {name: 'Alex', age: 38, key: 'F'},
    {name: 'April', age: 40, key: 'G'},
    {name: 'Margaret', age: 55, key: 'H'},
    {name: 'David', age: 40, key: 'I'},
  ]

  function flatRender({item}) {
    return (
      <Text style={styles.textStyle}>
        {item.name} - Age {item.age}
      </Text>
    )
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.key}
      data={friends}
      renderItem={flatRender}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
})

export default ListScreen
