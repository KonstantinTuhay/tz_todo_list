import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import withLogger from "../../helpers/withLogger";

const TodoList = ({
  todos,
  deleteOneTodo,
  deleteTodo,
  addNewTodo,
  setDelteOneTodo,
}) => {
  const LoggedTodo = withLogger(Todo);

  return (
    <div className={styles.TodoList}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <LoggedTodo
          key={todo.id}
          todo={todo}
          deleteOneTodo={deleteOneTodo}
          addNewTodo={addNewTodo}
          setDelteOneTodo={setDelteOneTodo}
        />
        // <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
