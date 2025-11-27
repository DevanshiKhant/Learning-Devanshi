import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../redux/todoslice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
                <div >{todo.text} 
                <button onClick={() => dispatch(removeTodo(todo.id))} 
                     style={{
                     margin:'20px',
                     backgroundColor: 'red',
                     color: 'white',
                     border: 'none',
                     }}>Delete</button>
                </div>
         </li>
        ))}
      </ul>
    </>
  )
}

export default Todos