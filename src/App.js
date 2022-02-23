import "./styles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllTodos } from "./ApiUtils";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!todos || todos.length === 0) {
      initializeTodos();
    }
  }, []);

  const initializeTodos = async () => {
    const prods = await GetAllTodos();
    setTodos(prods);
  };

  return (
    <div>
      {todos.map((todo) => (
        <>
          <Link className="todo-link" to={`/todo/${todo.id}`} key={todo.id}>
            {todo.title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}
