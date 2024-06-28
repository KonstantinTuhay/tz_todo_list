import React from "react";
import { RiAppleLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
// import EditTodoLogger from "../EditTodoLogger";
import styles from "./index.module.css";

const Todo = ({ todo, setTodos, todos, setPath, setVal, val }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  // const EditLogging = withLogger(EditTodoLogger);

  const deleteTodo = async (id, teachMeUseHoc) => {
    teachMeUseHoc();
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await fetch(`${process.env.REACT_APP_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    setTodos(todos.filter((todo) => todo.id !== id));

    const data = await response.json();
    console.log(data);
  };

  const toggleTodo = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_URL}/todos/${id}/isCompleted`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: val,
        }),
      }
    );

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );

    const data = await response.json();
    console.log(data);
  };

  const editTodo = (id, title) => {
    setVal(title);
  };

  return (
    <>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ""
        }`}
      >
        <RiAppleLine className={styles.appleImage} />
        <div className={styles.todoText}>{todo.title}</div>

        <CiEdit
          className={styles.editImage}
          onClick={() => {
            setPath(todo.id);
            editTodo(todo.id, todo.title);
          }}
        />
        <DeleteLogging
          className={styles.deleteImage}
          id={todo.id}
          text={todo.title}
          title="Удалил таску:"
          deleteTodo={deleteTodo}
        />

        <MdDoneOutline
          className={styles.doneImage}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </>
  );
};

export default Todo;
