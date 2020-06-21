import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  board : []
}

const reducer = function(state = initialState, action){

  switch(action.type){
    case "SET_BOARD":
      return {
        ...state,
        board : action.payload
      }
    case "UPDATE_BOARD":
      let {row, col, text} = action.payload
      let newBoard = JSON.parse(JSON.stringify(state.board))
      newBoard[row][col] = Number(text)
      
      return {
        ...state,
        board : newBoard
      }
    default :
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store