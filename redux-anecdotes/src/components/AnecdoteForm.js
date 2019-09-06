import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { createMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {


    const addAnecdote = (event) => {
        event.preventDefault()
        props.newAnecdote(event.target.anecdote.value)
        props.createMessage(event.target.anecdote.value)
        setTimeout(() => { props.removeMessage()}, 3000)
        event.target.anecdote.value = ''
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        notification: state.notification,
        filter: state.filter
    }
}


const mapDispatchToProps = {
    newAnecdote,
    createMessage,
    removeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)