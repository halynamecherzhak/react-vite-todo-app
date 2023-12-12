import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

export default function AddTodo ({todo, setTodo, addTodo})  {

  const inputRef = useRef(null);

  useEffect( () => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  })

  return (
      <div>
        <input type='text' name='todo' placeholder='Create a new todo' ref={inputRef} onChange={(e) => setTodo(e.target.value)} value={todo}></input>
        <button onClick={addTodo}>Add</button>
      </div>
  )
}

AddTodo.propTypes = {
  todo: PropTypes.string,
  setTodo: PropTypes.func,
  addTodo: PropTypes.func
}