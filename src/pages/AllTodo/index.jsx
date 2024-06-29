import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import Info from "../../components/InfoCircle";
import withLogger from "../../helpers/withLogger";
import localStorageHelpers from "../../helpers/localStorageHelpers";
import api from "../../helpers/api";
import "../../App.css";

function AllTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }

    fetchData();
  }, []);

  const [text, setText] = useState("");

  const addTodo = async (text) => {
    try {
      const response = await api.post("/todos", { title: text });
      console.log(response);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const AddLogging = withLogger(TodoForm);

  return (
    <div className="App">
      <div className="small_header">
        <h1>Your Todo App</h1>

        <Info />
      </div>
      <AddLogging
        todos={todos}
        setTodos={setTodos}
        setText={setText}
        text={text}
        addTodo={addTodo}
        title="Добавил таску:"
      />

      <TodoList todos={todos} setTodos={setTodos} />

      <Link to="/" onClick={() => localStorageHelpers.setToken("")}>
        Log Out
      </Link>
    </div>
  );
}

export default AllTodo;
