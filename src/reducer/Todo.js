const TODO_INSERT = "TODO/INSERT";
const TODO_REMOVE = "TODO/REMOVE";
const TODO_UPDATE = "TODO/UPDATE";
const TODO_TOGGLE = "TODO/TOGGLE";

export const todoInsert = (id, text) => {
    return {
        type: TODO_INSERT,
        payload: {
            id: id,
            text: text,
            isComplete: false
    }}
}

export const todoRemove = (id) => {
    return {
        type: TODO_REMOVE,
        payload: {
            id: id
        }
    }
}

export const todoUpdate = (id, text) => {
    return {
        type: TODO_UPDATE,
        payload: {
            id: id,
            text: text
        }
    }
}

export const todoToggle = (id) => {
    return {
        type: TODO_TOGGLE,
        payload: {
            id: id
        }
    }
}

const initState = {
    todos: [
        {
            id: 1,
            text: "todolist프로젝트 하기",
            isComplete: false
        },
    ]
}

export default function todoReducer(state = initState, {type, payload}){
    switch(type){
        case TODO_INSERT:
            return {
                todos: state.todos.concat({
                    id: payload.id,
                    text: payload.text,
                    isComplete: false
                })
            }
        case TODO_REMOVE:
            return {
                todos: state.todos.filter((todo) => todo.id !== payload.id)
            }
        case TODO_UPDATE:
            return {
                todos: state.todos.map((todo)=> todo.id === payload.id ? {...todo, text: payload.text} : todo)
            }
        case TODO_TOGGLE:
            return {
                todos: state.todos.map((todo) => todo.id === payload.id ? {...todo, isComplete: !todo.isComplete} : todo)
            }
        default:
            return {...state}
    }
}
