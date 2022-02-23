import axios from "axios";

export async function GetAllTodos() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return result.data;
}

export async function GetTodoById(id) {
  return {
    userId: 1,
    id,
    title: "Mock",
    completed: false
  };
}
