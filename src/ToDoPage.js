import React, { useState, useEffect } from "react";
import "./styles.css";
import { useParams, Link } from "react-router-dom";
import { GetTodoById } from "./ApiUtils";

export default function ToDoPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (!todo || !todo.id) {
      initializeTodo();
    }
  }, []);

  const initializeTodo = async () => {
    const prods = await GetTodoById(id);
    setTodo(prods);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h3>
        {todo.title} {todo.id}
      </h3>
    </div>
  );
}
