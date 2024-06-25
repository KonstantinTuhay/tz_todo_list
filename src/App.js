import React, { useState, useRef, useEffect } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import Info from "./components/Todos/Info";
import MyContext from "./components/tools/MyContext";
import { Routes, Route, Link } from "react-router-dom";
import withLogger from "./helpers/withLogger";
import LoginUsers from "./components/Authorization/LoginUsers";
import NotFound from "./components/Authorization/NotFound";

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

  const deleteTodo = (id, teachMeUseHoc) => {
    teachMeUseHoc();
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

  const addTodo = (text) => {
    const newTodo = {
      ...todos,
      text,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
  };

  const AddLogging = withLogger(TodoForm);

  return (
    <div className="App">
      <div>
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
        // onChange={(event) => setText(event.target.value)}
      />

      <MyContext.Provider
        value={[
          deleteTodo,
          toggleTodo,
          editTodo,
          val,
          setVal,
          setTodos,
          editTodo,
        ]}
      >
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </MyContext.Provider>
      <Routes>
        <Route path="/authorization" element={<LoginUsers />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Link to="/authorization">Log out</Link>
    </div>
  );
}

export default App;
