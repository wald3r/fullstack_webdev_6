
export const initializesAnecdotes = (anecdotes) => {
  return {
    type: 'INITANECDOTES',
    data: anecdotes
  }
}

export const newVote = (anecdote) => {
  return {
          type: 'INCREMENTANECDOTE',
          anecdote,
  }
}


export const newAnecdote = (data) => {
  return { 
          type: 'NEWANECDOTE',
          data,
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type){
    case 'NEWANECDOTE':
        return [...state, action.data].sort((a,b) => b.votes-a.votes)
    case 'INITANECDOTES':
        return action.data 
    case 'INCREMENTANECDOTE':
          const newState = state.filter(s => s.id !== action.anecdote.id)
          return newState.concat(action.anecdote).sort((a,b) => b.votes-a.votes)
    default:
      return state
    }
}
  


export default anecdoteReducer