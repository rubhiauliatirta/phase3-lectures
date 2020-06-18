import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import User from "./components/User"
export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
      .catch(console.log)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {/* <ScrollView>
        {
          users.map(user => {
            return (
              <User key={user.id} user={user}/>
            )
          })
        }
        </ScrollView> */}
      <FlatList
        data={users}
        renderItem={({ item }) => <User user={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //default flex direction nya column
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 24
  },
  title: {
    fontSize: 32,
    textAlign: "center"
  }
});
