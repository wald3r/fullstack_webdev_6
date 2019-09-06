export function setNotification(value, time) {
    return async dispatch => {
      dispatch(setMessage(value))
      setTimeout(() => {dispatch(removeMessage())}, time)
    }
}

const setMessage = (value) => {
    return {
        type:'NOTIFICATION',
        value
    }
}

const removeMessage = () => {
    return {
        type: 'REMOVE'
    }
}

const notificationReducer = (state = '', action) => {   
    switch(action.type){
        case 'NOTIFICATION':
            return action.value
        case 'CREATE':
            return `${action.value} created`
        case 'REMOVE':
            return ''
        default:
            return state
    }
    
}
  
  export default notificationReducer

