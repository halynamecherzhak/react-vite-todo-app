import { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // const [todos, setTodos] = useState([
  //   { title: "Learn about React", isCompleted: false },
  //   { title: "Meet friend for lunch", isCompleted: false },
  //   { title: "Build really cool todo app", isCompleted: false }
  // ]);

  useEffect(() => {
    const data = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(data));
  }, []);

  // відслідковуємо todos
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
        <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo}></AddTodo>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        ></TodoList>
      </div>
    </>
  );
}

export default App;
