const initialState = {
  users : []
}

export default function voteReducer(state = initialState, action){

  switch(action.type){
    case "SET_USER" :
      return { ...state, users : action.payload }
    case "ADD_USER" :
      return { ...state, users : state.users.concat(action.payload) }
    default : 
      return state
  }
}