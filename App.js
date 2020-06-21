import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Game, Finish } from "./screens"
import { Provider } from 'react-redux'
import store from "./store";
const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
            options={{
              headerStyle: {
                backgroundColor: 'red',
              },
              headerTintColor: '#fff',
            }}></Stack.Screen>
          <Stack.Screen name="Game" component={Game}></Stack.Screen>
          <Stack.Screen name="Finish" component={Finish}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
