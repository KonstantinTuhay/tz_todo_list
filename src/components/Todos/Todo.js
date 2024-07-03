import React, { useState } from "react";
import styles from "./Todo.module.css";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import { RiAppleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import EditTodoLogger from "../EditTodoLogger";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions/deleteActions";
import { toggleTodo } from "../../redux/actions/toggleActions";

const Todo = ({ todo, setTodos }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.list);

  const [val, setVal] = useState("");

  const deleteOneTodo = (id, teachMeUseHoc) => {
    teachMeUseHoc();
    dispatch(deleteTodo(id));
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleOneTodo = (id) => {
    dispatch(toggleTodo(id));
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id
    //       ? { ...todo, isCompleted: !todo.isCompleted }
    //       : { ...todo }
    //   )
    // );
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
          <div className={styles.todoText}>{todo.todo}</div>

          <CiEdit
            className={styles.editImage}
            onClick={() => editTodo(todo.id, todo.text)}
          />
          <DeleteLogging
            className={styles.deleteImage}
            id={todo.id}
            text={todo.text}
            title="Удалил таску:"
            deleteOneTodo={deleteOneTodo}
          />

          <MdDoneOutline
            className={styles.doneImage}
            onClick={() => toggleOneTodo(todo.id)}
          />
        </div>
      )}
    </>
  );
};

export default Todo;
