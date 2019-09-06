import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { createMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {


    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdote = await anecdoteService.createNew(content)
        props.newAnecdote(newAnecdote)
        props.createMessage(content)
        setTimeout(() => { props.removeMessage()}, 3000)
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name='anecdote'/></div>
            <button>create</button>
            </form>
        </div>
    )
}


const mapDispatchToProps = {
    newAnecdote,
    createMessage,
    removeMessage
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)