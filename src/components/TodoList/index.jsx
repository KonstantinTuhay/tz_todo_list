import React, { useState } from "react";
import Todo from "../Todo";
import styles from "./index.module.css";
import api from "../../helpers/api";

const TodoList = ({ todos, setTodos }) => {
  const [path, setPath] = useState(null);
  const [val, setVal] = useState("");
  const handleChange = (event, id) => {
    if (event.key === "Enter") {
      const change = async () => {
        try {
          const response = await api.patch(`/todos/${id}`, { title: val });
          console.log(response);
          setTodos((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, title: val } : item
            )
          );
          setPath(null);
        } catch (error) {
          console.error("Ошибка при получении данных:", error);
        }
      };
      change();
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
