import { useState, useEffect, createContext } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export const Context = createContext();

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { title: todo, isCompleted: false }]);
      setTodo("");
    }
  };

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
    <>
      <h1>Vite + React Todo App</h1>
      <div className="App">
        <Context.Provider
          value={{ todos, todo, setTodo, addTodo, deleteTodo, completeTodo }}
        >
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </Context.Provider>
      </div>
    </>
  );
}

export default App;
