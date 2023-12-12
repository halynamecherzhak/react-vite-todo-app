import PropTypes from "prop-types";
import Todo from "./Todo";
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <Todo
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            ></Todo>
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
