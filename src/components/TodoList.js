import React from 'react'
import { DoList } from './styledComp'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList(){
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const untesk = todos.filter(todo => todo.isComplete === false);
    return <>
    <DoList>
      <div className="workLeft">할 일 {untesk.length}개 남음</div>
      <div className="dowork">
        { todos.map((todo)=>{
          return <TodoItem key={todo.id} todo={todo} />
        }) }
      </div>
    </DoList>
    </>
}

export default TodoList