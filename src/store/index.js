import { createStore, combineReducers } from 'redux'
import usersReducer from "./reducers/users"
import messagesReducer from "./reducers/messages"

const reducer = combineReducers({
  usersReducer,
  messagesReducer
})
const store = createStore(reducer)

export default store