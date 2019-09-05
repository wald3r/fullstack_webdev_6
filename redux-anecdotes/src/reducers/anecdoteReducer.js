const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const incrementVote = (state, a) => {
    state[a].votes += 1
    state.sort((a,b) =>  b.votes-a.votes )
    return state
}


export const newVote = (id) => {
  return {
          type: id
  }
}


export const newAnecdote = (content) => {
  return { 
          type: 'NEWANECDOTE',
          data:  {
                    content: content,
                    id: getId(),
                    votes: 0
                }
          }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  if(action.type === 'NEWANECDOTE'){
    return (state.concat(action.data)).sort((a,b) => b.votes-a.votes)
  }
  
  for(let a = 0; a < state.length; a++){
    if(action.type === state[a].id){
      return incrementVote(state, a)
    }
  }

  return state
}

export default reducer