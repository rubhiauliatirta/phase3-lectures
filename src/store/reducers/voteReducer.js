const initialState = {
  totalVote : 0
}

export default function voteReducer(state = initialState, action){

  switch(action.type){
    case "ADD_TOTAL_VOTE" :
      return {...state, totalVote: state.totalVote + 1}
    default : 
      return state
  }
}