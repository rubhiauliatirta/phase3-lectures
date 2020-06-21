export function fetchBoard(level){
  return (dispatch) => {
    fetch(`https://sugoku2.herokuapp.com/board?difficulty=${level}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type : "SET_BOARD",
        payload : data.board
      })
    })
    .catch(console.log)
  } 
}

export function updateBoard(text, row, col){
  return {
    type : "UPDATE_BOARD",
    payload : {
      text,
      row,
      col
    }
  }
}