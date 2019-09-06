import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { initializesAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {
 
  
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => props.initializesAnecdotes(anecdotes))
  }, [props])


  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm /> 
    </div>
  )
}

export default connect(null, { initializesAnecdotes })(App)