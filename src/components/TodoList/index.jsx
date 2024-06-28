import React, { useState } from "react";
import Todo from "../Todo";
import styles from "./index.module.css";

const TodoList = ({ todos, setTodos }) => {
  const [path, setPath] = useState(null);
  const [val, setVal] = useState("");
  const handleChange = (event, id) => {
    if (event.key === "Enter") {
      (async () => {
        let token = localStorage.getItem("token");
        let response = await fetch(`${process.env.REACT_APP_URL}/todos/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: val,
          }),
        });
        console.log(response);
        setTodos((prev) =>
          prev.map((item) => (item.id === id ? { ...item, title: val } : item))
        );
        setPath(null);
        let data = await response.json();
        console.log(data);
      })();
    }
  };
  return (
    <div className={styles.TodoList}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo) =>
        todo.id === path ? (
          <input
            key={todo.id}
            className={styles.inputForChange}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            onKeyDown={(e) => handleChange(e, todo.id)}
          />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            setPath={setPath}
            setVal={setVal}
            val={val}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
