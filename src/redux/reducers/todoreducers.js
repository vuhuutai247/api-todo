const inititalState= {
    todos: []
}
const todoReducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'ADD_TODO_SUCCESSFULLY':
           const newTodos = state.todos.concat(action.payload)
            return {
                
                todo: newTodos
                
            };

    default:
        return state
    }
}

export default todoReducer