import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import Info from "./components/Todos/Info";
import MyContext from "./components/tools/MyContext";

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
  ]);

  const addTodo = (text) => {
    const newTodo = {
      ...todos,
      text,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
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
  const handleClick = (event) => {
    setText(event);
    addTodo(text);
    setText("");
  };

  return (
    <div className="App">
      <div>
        <h1>Your Todo App</h1>
        <Info />
      </div>

      <TodoForm
        addTodo={addTodo}
        handleClick={handleClick}
        setText={setText}
        text={text}
      />

      <MyContext.Provider
        value={[deleteTodo, toggleTodo, editTodo, val, setVal, setTodos]}
      >
        <TodoList todos={todos} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
