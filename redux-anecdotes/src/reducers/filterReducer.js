
export const filterList = (filter) => {
    return {
        type: 'SET_FILTER',
        filter,
    }
}


const filterReducer = (state = 'ALL', action) => {    
    console.log(action.filter)
    console.log(action.type)
    switch(action.type){
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
    
}
  
  export default filterReducer