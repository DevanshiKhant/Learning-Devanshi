import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/todoslice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} >
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        style={{
          margin:"20px",
          backgroundColor:'pink',
          }}>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo