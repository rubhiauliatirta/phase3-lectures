import { SET_USERS, SET_USERS_LOADING } from '../actions/types'

const initialState = {
  users : [],
  loading : false
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_USERS_LOADING : 
      return { ...state, loading : action.payload }
    case SET_USERS : {
      return { ...state, users : action.payload }
    }
    default :
      return state
  }
}