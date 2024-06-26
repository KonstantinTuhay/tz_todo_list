import React, { useState } from "react";
import styles from "./Todo.module.css";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import { RiAppleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import EditTodoLogger from "../EditTodoLogger";
import { CiEdit } from "react-icons/ci";

const Todo = ({ todo, setTodos, todos }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const [val, setVal] = useState("");

  const deleteTodo = (id, teachMeUseHoc) => {
    teachMeUseHoc();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const editTodo = (id, text) => {
    setVal(text);

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : { ...todo }
      )
    );
  };

  const handleChange = (event, id, teachMeUseHoc) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, text: val, isEdit: false } : item
        )
      );
    }
  };

  return (
    <>
      {todo.isEdit ? (
        <div>
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            title="Изменил таску:"
          />
        </div>
      ) : (
        <div
          className={`${styles.todo} ${
            todo.isCompleted ? styles.completedTodo : ""
          }`}
        >
          <RiAppleLine className={styles.appleImage} />
          <div className={styles.todoText}>{todo.text}</div>

          <CiEdit
            className={styles.editImage}
            onClick={() => editTodo(todo.id, todo.text)}
          />
          <DeleteLogging
            className={styles.deleteImage}
            id={todo.id}
            text={todo.text}
            title="Удалил таску:"
            deleteTodo={deleteTodo}
          />

          <MdDoneOutline
            className={styles.doneImage}
            onClick={() => toggleTodo(todo.id)}
          />
        </div>
      )}
    </>
  );
};

export default Todo;
