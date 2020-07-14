
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";

export default function Pan() {

  return (
    <View style={{flex: 1}}>
      <DrawerLayout
        drawerWidth={200}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType='front'
        drawerBackgroundColor="#ddd"
        renderNavigationView={DrawerContent}>
        <View style={styles.container}>
          <Text>
            Hello, it's Charizard
            </Text>
        </View>
      </DrawerLayout>
    </View>

  );
}


function DrawerContent() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 200,

        }}
        source={{ uri: "https://cdn.bulbagarden.net/upload/thumb/2/2a/Pokk%C3%A9n_Charizard.png/250px-Pokk%C3%A9n_Charizard.png" }}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
