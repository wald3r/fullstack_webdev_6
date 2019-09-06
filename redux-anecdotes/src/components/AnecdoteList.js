import React from 'react'
import { newVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteList = (props) => {


    const vote = async (anecdote) => {
        props.newVote(anecdote)
        props.setNotification(`you voted ${anecdote.content}`, 3000)
    }

    return (
       <div>
           <h2>Anecdotes</h2>
                {props.visibleAnecdotes.map(anecdote => 
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
       </div>
    )


}


const anecdotesToShow = (filter, anecdotes) => {
    if(filter === 'ALL')
        return anecdotes
    else{
        return anecdotes.filter(anecdote => anecdote.content.includes(filter))
    }
}

const mapStateToProps = (state) => {
    return {
       visibleAnecdotes: anecdotesToShow(state.filter, state.anecdotes)
    }
}

const mapDispatchToProps = {
    newVote, 
    setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
