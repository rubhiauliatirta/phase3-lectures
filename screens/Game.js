import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Dimensions} from 'react-native';
import { fetchBoard, updateBoard } from "../store/actions"
import { useDispatch, useSelector } from "react-redux";

export default function Game({ navigation, route }) {

  const { username, level } = route.params
  const board = useSelector(state => state.board)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchBoard(level))

  }, [])

  function onChangeText(text, row, col){
    dispatch(updateBoard(text, row, col))
  }


  return (
    <View style={styles.container}>
      <View>
        <Text>Game {`${username} ${level}`}</Text>
        <View style={{padding : 16}}>
        {
          board.map((rowArray, indexRow) => {
            return (
              <View key={indexRow} style={styles.column}>
              {
                rowArray.map((colCell, indexCol) => {
                  return (
                    <TextInput
                    key={indexCol}
                    style={styles.cell}
                      onChangeText={(text) => onChangeText(text, indexRow, indexCol)}
                      value={String(colCell)}/>
                  )
                })
              }
              </View>
            )
          })
        }
        </View>

      </View>
      <View>
        <Button title="Submit"></Button>
      </View>


    </View>
  );
}

const cellWidth = Dimensions.get('window').width/ 10


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  column : {
    flexDirection : "row"
  },
  cell : {
    width : cellWidth,
    height : cellWidth,
    borderColor : "black",
    borderWidth : 1,
    textAlign : "center"

  }

})