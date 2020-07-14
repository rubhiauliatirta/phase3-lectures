
import React, { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { PanGestureHandler } from "react-native-gesture-handler";

export default function Pan() {

  const [position, setPosition] = useState({x:0, y:0})

  function onGestureEvent(event){
    setPosition({
      x: event.nativeEvent.translationX,
      y: event.nativeEvent.translationY,
    })
    
  }


  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Image 
          style={{
            width: 200,
            height: 200,
            transform :[
              {translateX: position.x},
              {translateY: position.y}
            ]
  
          }}
          source={{ uri: "https://cdn.bulbagarden.net/upload/thumb/2/2a/Pokk%C3%A9n_Charizard.png/250px-Pokk%C3%A9n_Charizard.png"}}></Image>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
