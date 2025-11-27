import { useState } from 'react'
import './App.css'
import AddTodo from './component/addtodo'
import Todos from './component/todo'

function App() {
  
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App