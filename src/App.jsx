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

  return (
    <>
      <h1>Vite + React Todo App</h1>
      <div className="App">
        <Context.Provider value={{ todos, todo, setTodo, setTodos }}>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </Context.Provider>
      </div>
    </>
  );
}

export default App;
