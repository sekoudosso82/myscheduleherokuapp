
const initialState = {
    dateToDo: '',
    title: '',
    activeToDOList: []
}
export const fetchToDoLists = () => dispatch => {
    fetch('http://localhost:3001/api/v1/tasks')
    .then(resp => resp.json())
    .then(activeToDOList => {
        dispatch({type: 'FETCH_TO_DO_LISTS', payload: { activeToDOList }})
    })
} 
function todos (prevState = initialState, action)  {

    switch (action.type) {
    case 'FETCH_TO_DO_LISTS':
        return {...prevState, activeToDOList: action.payload.activeToDOList}
    
    case 'CREATE_TODO': 
        console.log('*****  payload create new todo  *****', action.payload)
        return {...prevState, activeToDOList: [...prevState.activeToDOList, action.payload]};
    
    case 'COMPLETE_TODO': {
        console.log('***** id  payload completed todo  *****', action.payload.id)
        return {...prevState, 
            activeToDOList: prevState.activeToDOList.map(todoList=>{
                if (todoList.id===action.payload.id){
                    return action.payload
                }else { return todoList }
            })};
    }
    case 'REMOVE_TODO': 
        console.log('***** id payload delete todo  *****', action.payload.id)
        return {...prevState, activeToDOList: [...prevState.activeToDOList.filter(todoList => todoList.id !== action.payload.id)]};
    
    default:
        return prevState;
    }
}

export default todos

