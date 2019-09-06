import React from 'react'
import { newVote } from '../reducers/anecdoteReducer'
import { voteMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'


const AnecdoteList = (props) => {


    const vote = async (anecdote) => {
        anecdote.votes += 1
        const newAnecdote = await anecdoteService.update(anecdote)
        props.newVote(newAnecdote)
        props.voteMessage(newAnecdote.content)
        setTimeout(() => { props.removeMessage()}, 3000)
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
    voteMessage,
    removeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
