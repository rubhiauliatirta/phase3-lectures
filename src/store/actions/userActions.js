export function setUser(){
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      dispatch(
        {
          type : "SET_USER",
          payload : data
        }
      )
    })
    .catch(console.log)

  }
}


export const addUser = (user) => {
  return {
    type : "ADD_USER",
    payload : user
  }
}