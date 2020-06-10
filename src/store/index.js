import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer"
import voteReducer from "./reducers/voteReducer";

const reducer = combineReducers({
  userReducer,
  voteReducer,
})

/**
 * bentuk state tanpa combine reducer
 * {
 *  users : []
 *  totalVote : 0
 * }
 * 
 * cara akses state => state.users
 * 
 * ==============================================
 * 
 * bentuk state dengan menggunakan combineReducer
 * {
 *  userReducer : {
 *    users : []
 *  },
 *  voteReducer : {
 *    totalVote : 0
 *  }
 * }
 * 
 * cara akses cara akses state => state.userReducer.users
 */
const store = createStore(reducer, applyMiddleware(thunk))
/**
 * createStore(reducer, [preloadedState], [enhancer])
 * createStore(reducerHasilCombine, enhancer-applyMiddleware)
 * enhancer => meng enhance capability dari store kita dengan third party library/middleware buatan kita sendiri
 */
export default store