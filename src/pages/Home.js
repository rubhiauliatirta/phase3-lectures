import React from 'react'
import {
  useSelector, useDispatch
} from 'react-redux'

import { setMessage } from '../store/actions/messagesActions'

export default () => {

  const { message } = useSelector(state => state.messagesReducer)
  const dispatch = useDispatch()

  function changeMessage(){
    dispatch(setMessage("I can change you from home"))
  }

  return ( 
    <>
      <h1>Welcome to Home Page</h1> 
      <h4>{message}</h4>
      <button onClick={changeMessage}>Change</button>
    </>
    
  )
}