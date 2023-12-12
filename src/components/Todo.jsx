import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../App";

const Todo = ({ todo, index }) => {
  const { deleteTodo, completeTodo } = useContext(Context);

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
