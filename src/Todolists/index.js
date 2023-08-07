import React from "react";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

const Todolist = () => {
  const [todo, setTodo] = React.useState("")
  const dispatch = useDispatch()

const selector =  useSelector(state => state.todoReducer)

  const handleAdd =  () => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
      name: todo
    }, {
      Headers: {
        "Content-type": 'application/json'
      }
    }).then(res => {
      dispatch({type: "ADD_TODO_SUCCESSFULLY", payload: res.data})
    })
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return(
    <>
      <div>
      
      <input type="text" name="todo" value={todo} onChange={(e) => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {selector.todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      </div>
    </>
    
  )
}

export default Todolist