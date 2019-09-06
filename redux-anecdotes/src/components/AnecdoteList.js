import React from 'react'
import { newVote } from '../reducers/anecdoteReducer'
import { voteMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {


    const vote = (id) => {
        props.newVote(id)
        props.voteMessage(id)
        setTimeout(() => { props.removeMessage()}, 3000)
    }

    const anecdotesToShow = () => {
        if(props.filter === 'ALL')
            return props.anecdotes
        else{
            console.log(props.anecdotes)
            return props.anecdotes.filter(anecdote => anecdote.content.includes(props.filter))
        }
    }

    return (
       <div>
           <h2>Anecdotes</h2>
                {anecdotesToShow().map(anecdote => 
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
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
    newVote, 
    voteMessage,
    removeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
