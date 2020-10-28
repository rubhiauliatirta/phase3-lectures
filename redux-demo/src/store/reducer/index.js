import { INCREMENT, DECREMENT} from "../actions"

const initialState = {
  number: 0,
  users: []
}


export default function reducer(state = initialState, action){
  console.log(action)
  switch(action.type){
    case INCREMENT:
      return {...state, number: state.number + 1}
    case DECREMENT:
      return {...state, number: state.number - 1}
    case "SET_USERS":
      return {...state, users: action.payload}
  }

  return state
}

