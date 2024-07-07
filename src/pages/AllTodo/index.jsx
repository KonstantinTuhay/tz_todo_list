import React from "react";
import TodoForm from "../../components/Todos/TodoForm";
import TodoList from "../../components/Todos/TodoList";
import "../../App.css";
import Info from "../../components/Todos/Info";
import withLogger from "../../helpers/withLogger";

function AllTodo() {
  // const [todos, setTodos] = useState([
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
  // ]);

  // const [text, setText] = useState("");

  // const addTodo = (text) => {
  //   const newTodo = {
  //     ...todos,
  //     text,
  //     id: crypto.randomUUID(),
  //   };
  //   setTodos([...todos, newTodo]);
  // };

  const AddLogging = withLogger(TodoForm);

  return (
    <div className="App">
      <div>
        <h1>Your Todo App</h1>
        <Info />
      </div>
      <AddLogging
        // todos={todos}
        // setTodos={setTodos}
        // setText={setText}
        // text={text}
        // addTodo={addTodo}
        title="Добавил таску:"
      />

      <TodoList
      // todos={todos}
      // setTodos={setTodos}
      />
    </div>
  );
}

export default AllTodo;
