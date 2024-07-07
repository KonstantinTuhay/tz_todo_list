import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";

const TodoList = ({ todos, setTodos }) => {
  const tasks = useSelector((state) => state.tasksSlice);
  const dispatch = useDispatch();
  console.log(tasks);
  return (
    <div className={styles.TodoList}>
      {tasks.length === 0 && <h2>Todo list is empty</h2>}
      {tasks.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
