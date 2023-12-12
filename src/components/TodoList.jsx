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

export default TodoList;
