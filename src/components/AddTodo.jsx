import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../App";

export default function AddTodo() {
  const { todo, setTodo, addTodo } = useContext(Context);

  const inputRef = useRef(null);

  //set focus on input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="Create a new todo"
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

AddTodo.propTypes = {
  todo: PropTypes.string,
  setTodo: PropTypes.func,
  addTodo: PropTypes.func,
};
