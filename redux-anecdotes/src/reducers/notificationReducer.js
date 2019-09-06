
export const voteMessage = (value) => {
    return {
        type: 'VOTE',
        data: { value: value }
    }
}

export const createMessage = (value) => {
    return {
        type: 'CREATE',
        data: { value: value }
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
            return `Voted for ${action.data.value}`
        case 'CREATE':
            return `${action.data.value} created`
        case 'REMOVE':
            return ''
        default:
            return ''
    }
    
}
  
  export default notificationReducer