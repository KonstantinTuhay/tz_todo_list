import React from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import Info from "./components/Todos/Info";
import withLogger from "./helpers/withLogger";
import "./App.css";

function App() {
  const AddLogging = withLogger(TodoForm);

  return (
    <div className="App">
      <div>
        <h1>Your Todo App</h1>
        <Info />
      </div>
      <AddLogging title="Добавил таску:" />

      <TodoList />
    </div>
  );
}

export default App;
