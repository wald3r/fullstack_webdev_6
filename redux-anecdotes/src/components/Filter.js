import React from 'react'
import { connect } from 'react-redux'
import { filterList } from '../reducers/filterReducer'


const Filter = (props) => {


    const newFilter = (event) => {
        event.preventDefault()
        props.filterList(event.target.value)
    }


    return (
        <div>
            filter <input onChange={newFilter} ></input>
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
    filterList
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)