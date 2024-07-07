import React from "react";
import Todo from "../Todo";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../api";

const TodoList = ({ todos, setTodos }) => {
  // const { data: tasks, error, isLoading } = useGetTasksQuery();
  const tasks = useSelector((state) => state.tasksSlice);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

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
