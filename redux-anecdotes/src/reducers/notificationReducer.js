
export const voteMessage = (value) => {
    return {
        type: 'VOTE',
        value
    }
}

export const createMessage = (value) => {
    return {
        type: 'CREATE',
        value
    }
}

export const removeMessage = () => {
    return {
        type: 'REMOVE'
    }
}

const notificationReducer = (state = '', action) => {   
    switch(action.type){
        case 'VOTE':
            return `Voted for ${action.value}`
        case 'CREATE':
            return `${action.value} created`
        case 'REMOVE':
            return ''
        default:
            return state
    }
    
}
  
  export default notificationReducer