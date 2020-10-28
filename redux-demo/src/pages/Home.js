import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "../store/actions/numberActions"
import { setUser } from "../store/actions/userActions";


export default function Home() {

  // const number = useSelector(state => state.number)
  // const users = useSelector(state => state.users)

  const {number, users} = useSelector(state => state)
  const dispatch = useDispatch()

  function incrementNumber(){
    
    dispatch(increment())
  }

  function decrementNumber(){
    
    dispatch(decrement())
  }

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(result => {
      dispatch(setUser(result))
    })
    .catch(console.log)
  }, [])

  return (
    <div>
      <h1>{number}</h1> 
      <button onClick={incrementNumber}>ADD</button>
      <button onClick={decrementNumber}>REDUCE</button>
      <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
      </ul>
    </div>
  );
}
