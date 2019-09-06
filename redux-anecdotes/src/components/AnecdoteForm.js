import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {


    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        props.newAnecdote(content)
        props.setNotification(`you added ${content}`, 3000)
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
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)