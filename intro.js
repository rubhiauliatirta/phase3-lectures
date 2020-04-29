const {createStore} = require("redux")

const initialState = {
  number : 0,
  message : "Sabana"
}

const reducer = function(state = initialState, action){
  if(action.type === "INCREMENT"){
    return { ...state, number : state.number + 1}
  }
  return state
}

const store = createStore(reducer)

console.log(store.getState(), "state awal")
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })

// console.log(store.getState())