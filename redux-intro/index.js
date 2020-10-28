// 1. Setup Redux
// 2. update data di redux


/* SETUP AWAL STORE REDUX */
const { createStore } = require("redux")


// reducer adalah function yang menerima state saat ini dan action
// reducer tugasnya adalah menghasilkan state baru

const initialState = {
  number: 0,
  message: "hellow"
}

// 1. PURE FUNCTION & IMMUTABLE
// 2. TUGAS HANYA UNTUK RETURN STATE BARU
// 3. RETURN 

function reducer(state = initialState, action){
  console.log("invoked")
  switch(action.type){
    case "INCREMENT":
      let cloneObject = {...state}
      cloneObject.number = state.number + action.payload

      return cloneObject
    case "DECREMENT": 
      return {...state, number : state.number - 1}
    case "MULTI_ACTION": 
      return {...state, message: "Sabana", number: 7}
    default:
      return state
  }
}

let store = createStore(reducer)

store.subscribe(() => console.log(store.getState(), "subscribe"))


/**************************************** */

/** UPDATE STORE */

store.dispatch({ type: "MULTI_ACTION" })



store.dispatch({ type: "DECREMENT" })



