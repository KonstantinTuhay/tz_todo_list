import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import Info from "./components/Todos/Info";
import MyContext from "./components/tools/MyContext";
import { Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "first todo",
      isCompleted: false,
      isEdit: false,
      id: crypto.randomUUID(),
    },
    {
      text: "second todo",
      isCompleted: false,
      isEdit: false,
      id: crypto.randomUUID(),
    },
    {
      text: "third todo",
      isCompleted: false,
      isEdit: false,
      id: crypto.randomUUID(),
    },
  ]);

  const [deleteOneTodo, setDelteOneTodo] = useState([]);
  // console.log(deleteOneTodo);
  const deleteTodo = (id) => {
    setDelteOneTodo([
      ...deleteOneTodo,
      todos.filter((todo) => todo.id === id)[0].text,
    ]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const [val, setVal] = useState("");

  const editTodo = (id, text) => {
    setVal(text);

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : { ...todo }
      )
    );
  };

  const [text, setText] = useState("");

  const [addNewTodo, setAddNewTodo] = useState([]);
  const addTodo = (text) => {
    setAddNewTodo([...addNewTodo, text]);
    const newTodo = {
      ...todos,
      text,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div>
        <h1>Your Todo App</h1>
        <Info />
      </div>

      <TodoForm
        todos={todos}
        setTodos={setTodos}
        setText={setText}
        text={text}
        addTodo={addTodo}
      />

      <MyContext.Provider
        value={[deleteTodo, toggleTodo, editTodo, val, setVal, setTodos]}
      >
        <TodoList
          todos={todos}
          deleteOneTodo={deleteOneTodo}
          deleteTodo={deleteTodo}
          addNewTodo={addNewTodo}
        />
        {/* <LoggedTodoList /> */}
      </MyContext.Provider>

      <Link>Log out</Link>
    </div>
  );
}

export default App;
