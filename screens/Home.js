import React, {useState} from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from '../styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

function HomeScreen({navigation}){
  const [text, setText] = useState("")

  function onPress(){
    navigation.navigate("Finish", {
      message : "bisa kirim data lewat params",
      sender : "rubhi",
      text : text
    })
  }

  return (
    <View style={styles.container}>
      <Text>Ini Home</Text>
      <TextInput 
        style={{padding : 4, borderWidth: 2, borderColor: "black", width : "80%"} }
        onChangeText={text => setText(text)} 
        value={text}>  
      </TextInput>
      <Button onPress={onPress} title="To Finish Page"></Button>
    </View>
  );
}

function FavoriteScreen(){
  return (
    <View style={styles.container}>
      <Text>Ini FavoriteScreen</Text>
    </View>
  )
}
