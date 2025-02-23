import { useState, useEffect } from "react";
import { axiosClient } from "../utils/api/axiosInstance";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axiosClient.get("/todos").then((response) => {
      setTodos(response.data.todos.map(todo => ({ ...todo, status: "Pending" })));
    });
  }, []);

  return { todos, setTodos };
};

export default useTodos;
