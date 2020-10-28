import {INCREMENT, DECREMENT} from "."

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export function decrement(){
  return {
    type: DECREMENT
  }
}

//named export

// import {increment, decrement} from "./number"


