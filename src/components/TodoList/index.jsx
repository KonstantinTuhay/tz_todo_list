import React from "react";
import Todo from "../Todo";
import styles from "./index.module.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={styles.TodoList}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
