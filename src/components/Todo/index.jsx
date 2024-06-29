import React from "react";
import { RiAppleLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import api from "../../helpers/api";
import styles from "./index.module.css";

const Todo = ({ todo, setTodos, todos, setPath, setVal, val }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);

  const deleteTodo = async (id, teachMeUseHoc) => {
    try {
      const response = await api.delete(`/todos/${id}`);
      console.log(response);
      setTodos(todos.filter((todo) => todo.id !== id));
      teachMeUseHoc();
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await api.patch(`/todos/${id}/isCompleted`, {
        title: val,
      });
      console.log(response);
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : { ...todo }
        )
      );
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
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
