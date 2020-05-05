import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles'

export default function Welcome({ navigation }) {

  function buttonOnPress() {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text>Hello React Navigation!</Text>
      <Button onPress={buttonOnPress} title="Go to Home"></Button>
    </View>
  );
}



