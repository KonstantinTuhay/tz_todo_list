import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";

const TodoList = ({ setTodos }) => {
  const { todos } = useSelector((state) => state.list);

  return (
    <div className={styles.TodoList}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
