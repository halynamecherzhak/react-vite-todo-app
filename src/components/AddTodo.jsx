import { useContext, useEffect, useRef } from "react";
import { Context } from "../App";

export default function AddTodo() {
  const { todos, todo, setTodo, setTodos } = useContext(Context);

  const inputRef = useRef(null);

  //set focus on input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { title: todo, isCompleted: false }]);
      setTodo("");
    }
  };

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
