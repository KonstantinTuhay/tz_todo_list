import React, { useContext } from "react";
import styles from "./Todo.module.css";

import { RiAppleLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";
import MyContext from "../tools/MyContext";

// import { RiCheckboxMultipleFill } from "react-icons/ri";

const Todo = ({ todo }) => {
  const [deleteTodo, toggleTodo, editTodo, val, setVal, setTodos] =
    useContext(MyContext);

  const handleChange = (event, id) => {
    if (event.key === "Enter") {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, text: val, isEdit: false } : item
        )
      );
    }
  };

  // const correctEdit = (event, id) => {
  //   setTodos((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, text: val, isEdit: false } : item
  //     )
  //   );
  // };

  return (
    <>
      {todo.isEdit ? (
        <div>
          <input
            className={styles.inputForChange}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            onKeyDown={(e) => handleChange(e, todo.id)}
          />
          {/* <RiCheckboxMultipleFill onClick={(e) => correctEdit(e, todo.id)} /> */}
        </div>
      ) : (
        <div
          className={`${styles.todo} ${
            todo.isCompleted ? styles.completedTodo : ""
          }`}
        >
          <RiAppleLine />
          <div className={styles.todoText}>{todo.text}</div>
          <CiEdit onClick={() => editTodo(todo.id, todo.text)} />
          <MdDeleteOutline onClick={() => deleteTodo(todo.id)} />
          <MdDoneOutline onClick={() => toggleTodo(todo.id)} />
        </div>
      )}
    </>
  );
};

export default Todo;
