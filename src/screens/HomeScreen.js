import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import screens from "../data/Screens";

const HomeScreen = ({ navigation }) => {
  const links = Object.keys(screens)

  function renderListItem({item}) {
    return (
      <View style={styles.listItemStyle}>
        <Button 
          onPress={() => navigation.navigate(item)}
          title={`Go to ${item} Demo`} 
          />
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}   
            data={links} 
            renderItem={renderListItem} 
        />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  listItemStyle: {
    paddingBottom: 20
  }
});

export default HomeScreen;