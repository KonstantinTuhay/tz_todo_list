import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import Info from "../../components/InfoCircle";
import withLogger from "../../helpers/withLogger";
import localStorageHelpers from "../../helpers/localStorageHelpers";
// import getToken from "../../helpers/getToken";
// import setToken from "../../helpers/setToken";
import "../../App.css";

function AllTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    // console.log(getToken("token"));

    const token = localStorage.getItem("token");
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await response.json();
      setTodos(data);
    })();
  }, []);

  const [text, setText] = useState("");

  const addTodo = async (text) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: text,
      }),
    });

    let data = await response.json();
    setTodos([...todos, data]);
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
