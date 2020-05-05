import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import styles from "../styles"

export default function Finish({ navigation, route }) {

  const { message, sender, text } = route.params

  useEffect(() => {
    alert( `${message}\n${text} from ${sender}`)
  }, [])

  function onPress () {
    navigation.navigate("Home")
    /**
     * navigate vs push, lihat perbedaannya
     * setelah kembali ke halaman home, pencet tombol back
     */
  }

  return (
    <View style={styles.container}>
      <Text>Finish!</Text>
      <Button onPress={onPress} title="Back to Home"></Button>
     </View>
  );
}
