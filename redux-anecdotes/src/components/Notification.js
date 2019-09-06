import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notification === ''){
    return null
  }
  else{
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  }
  
}


const mapStateToProps = (state) => {
  return {
      anecdotes: state.anecdotes,
      notification: state.notification,
      filter: state.filter
  }
}


export default connect(mapStateToProps)(Notification)