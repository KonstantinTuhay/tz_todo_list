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
  const [todos, setTodos] = useState([
    // {
    //   text: "first todo",
    //   isCompleted: false,
    //   isEdit: false,
    //   id: crypto.randomUUID(),
    // },
    // {
    //   text: "second todo",
    //   isCompleted: false,
    //   isEdit: false,
    //   id: crypto.randomUUID(),
    // },
    // {
    //   text: "third todo",
    //   isCompleted: false,
    //   isEdit: false,
    //   id: crypto.randomUUID(),
    // },
  ]);

  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    // console.log(getToken("token"));

    const token = localStorage.getItem("token");
    // const token = localStorageHelpers.getToken("token");
    (async () => {
      let response = await fetch(`${process.env.REACT_APP_URL}/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await response.json();
      setTodos(data);
      console.log(data);
    })();
  }, []);

  const [text, setText] = useState("");

  const addTodo = (text) => {
    // const newTodo = {
    //   ...todos,
    //   text,
    //   id: crypto.randomUUID(),
    // };
    // setTodos([...todos, newTodo]);

    (async () => {
      let token = localStorage.getItem("token");
      let response = await fetch(`${process.env.REACT_APP_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: text,
        }),
      });
      // if (!response.ok) {
      //   console.error("Запрос не удался");
      //   return;
      // }

      // console.log(response.json());

      let data = await response.json();
      setTodos([...todos, data]);
      // console.log(todos);
      console.log(data);
    })();
  };
  console.log(todos);

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
