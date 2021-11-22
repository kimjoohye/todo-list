import React from 'react'
import {DoTemplate} from './styledComp'
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import '../styles/App-style.scss'

function TodoTemplate(){
    return <>
    <h1 className="title">To-do List</h1>
    <DoTemplate>
        <TodoHead />
        <TodoList />
    </DoTemplate>
    </>
}

export default TodoTemplate