import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({
  todos,
  // deleteTodo,
  // toggleTodo,
  // editTodo,
  // text,
  // setText,
  // val,
  // setVal,
  // setTodos,
}) => {
  return (
    <div className={styles.TodoList}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          // deleteTodo={deleteTodo}
          // toggleTodo={toggleTodo}
          // editTodo={editTodo}
          // text={text}
          // setText={setText}
          // val={val}
          // setVal={setVal}
          // setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
