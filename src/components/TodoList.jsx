import PropTypes from "prop-types";
import Todo from "./Todo";
import { useContext } from "react";
import { Context } from "../App";

const TodoList = () => {
  const { todos } = useContext(Context);

  return (
    <>
      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} index={index}></Todo>
          ))}
        </ul>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.isRequired,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};

export default TodoList;
