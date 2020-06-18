import React from 'react';
import {StyleSheet, View, Text} from "react-native"

export default function User(props) {


  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.user.name}</Text>
      <Text style={styles.info}>{props.user.username}</Text>
      <Text style={styles.info}>{props.user.email}</Text>
      <Text style={styles.info}>{props.user.phone}</Text>
      <Text style={styles.info}>{props.user.website}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "black",
    padding : 16,
    marginTop : 8
  },
  name : {
    fontSize : 24,
    fontWeight : "bold",
    color : "white"
  },
  info : {
    fontSize : 20,
    color : "white"
  }
})
