import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../App";

const Todo = ({ todo, index }) => {
  const { todos, setTodos } = useContext(Context);

  const deleteTodo = (todoItem) => {
    const filteredTodos = todos.filter((todo) => {
      return todo !== todoItem;
    });
    setTodos(filteredTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <li key={index}> {todo.title} </li>
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          completeTodo(index);
        }}
      >
        Complete
      </button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Todo;
