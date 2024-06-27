import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "../../components/TodoInput/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import Info from "../../components/InfoCircle";
import withLogger from "../../helpers/withLogger";
import setToken from "../../utils/setToken";
import getToken from "../../utils/getToken";
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

  const [text, setText] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      ...todos,
      text,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
  };

  const AddLogging = withLogger(TodoForm);
  // console.log(localStorage.getItem("token"));
  console.log(getToken("token"));

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

      <Link to="/" onClick={() => setToken("")}>
        Log Out
      </Link>
    </div>
  );
}

export default AllTodo;
