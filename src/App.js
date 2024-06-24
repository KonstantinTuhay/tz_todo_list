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

  const [showToDo, setShowToDo] = useState([]);
  // console.log(deleteOneTodo);
  const deleteTodo = (id, text, stringDate, title) => {
    console.log(`${stringDate} ${title} ${text}`);
    setShowToDo([...showToDo, text]);
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
    setShowToDo([...showToDo, text]);
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
          showToDo={showToDo}
          deleteTodo={deleteTodo}
          // addNewTodo={addNewTodo}
        />
        {/* <LoggedTodoList /> */}
      </MyContext.Provider>

      <Link>Log out</Link>
    </div>
  );
}

export default App;
