
import anecdoteService from '../services/anecdotes'


export const initializesAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INITANECDOTES',
      data: anecdotes   
    })
  }
}

export const newVote = (anecdote) => {
  return async dispatch => {
    anecdote.votes += 1 
    const data = await anecdoteService.update(anecdote)
    dispatch({
        type: 'INCREMENTANECDOTE',
        data,
    })
  }
}


export const newAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEWANECDOTE',
      data,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type){
    case 'NEWANECDOTE':
        return [...state, action.data].sort((a,b) => b.votes-a.votes)
    case 'INITANECDOTES':
        return action.data.sort((a,b) => b.votes-a.votes)
    case 'INCREMENTANECDOTE':
          const newState = state.filter(s => s.id !== action.data.id)
          return newState.concat(action.data).sort((a,b) => b.votes-a.votes)
    default:
      return state.sort((a,b) => b.votes-a.votes)
    }
}
  


export default anecdoteReducer