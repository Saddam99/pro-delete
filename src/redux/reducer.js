const initialStare = {
    todos: [],
    loading: false,

    users: [],
    usersLoading: false

}
const reducer = (state = initialStare, action) => {
    switch (action.type) {
        case 'todos/load/start':
            return {
                ...state,
                loading: true
            }
        case 'todos/load/success':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case 'todos/remove/success':
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload;
                })
            }
        case 'todos/remove/start':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }
                    return todo
                })
            }
        case 'todos/check/start':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo
                })

            }
        case 'todos/check/success':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo;
                })
            }
        case 'users/load/start':
            return {
                ...state,
                usersLoading: true
            }
        case 'users/load/success':
            return {
                ...state,
                usersLoading: false,
                users: action.payload
            }
        default:
            return state
    }
}
export default reducer;