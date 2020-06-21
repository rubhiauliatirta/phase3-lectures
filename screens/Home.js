import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';

export default function Home({ navigation }) {

  const [username, setUsername] = useState("")


  function onPress(level){
    alert(level)
    navigation.navigate("Game", {
      username,
      level
    })
  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={{textAlign : "center"}}>Welcome to sugoku game!</Text>
        <TextInput
        style={{textAlign : "center", marginTop: 8}}
          onChangeText={(text) => setUsername(text)} 
          value={username}
          placeholder="input username">
        </TextInput>
      </View>
      
      <View>
        <Button onPress={() => onPress("easy")}  title="Easy"></Button>
        <Button onPress={() => onPress("medium")}  title="Medium"></Button>
        <Button onPress={() => onPress("hard")}  title="Hard"></Button>
      </View>
      
     </View>
  );
}

const styles = StyleSheet.create({
  container : {
    padding : 16,
    flex : 1,
    alignItems : "stretch",
    justifyContent : "space-evenly"
  },

})
