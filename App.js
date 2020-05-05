import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from "./screens/Welcome"
import Home from "./screens/Home"
import Finish from "./screens/Finish"


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ 
            title: 'Welcome to the Jungle', 
            headerTintColor: 'red',
          }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


