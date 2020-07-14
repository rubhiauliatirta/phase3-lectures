
import React, { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { PinchGestureHandler } from "react-native-gesture-handler";

export default function App() {

  const [scale, setScale] = useState(1)

  function onGestureEvent(event){
    setScale(event.nativeEvent.scale)
    
  }


  return (
    <View style={styles.container}>
      <PinchGestureHandler onGestureEvent={onGestureEvent}>
        <Image 
          style={{
            width: 200,
            height: 200,
            transform :[
              {scale: scale},
            ]
  
          }}
          source={{ uri: "https://cdn.bulbagarden.net/upload/thumb/2/2a/Pokk%C3%A9n_Charizard.png/250px-Pokk%C3%A9n_Charizard.png"}}></Image>
      </PinchGestureHandler>
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
