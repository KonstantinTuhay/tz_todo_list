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
import { editTodo } from "../../redux/actions/editActions";
import { addChangeText } from "../../redux/actions/addChangeActions";
import { changeList } from "../../redux/actions/changeListAction";

const Todo = ({ todo }) => {
  console.log(todo);
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.change);
  const { id } = useSelector((state) => state.edit);
  const idTask = Object.keys(id);
  console.log(idTask);

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

  const editOneTodo = (id) => {
    dispatch(editTodo(id));
    // setVal(text);

    // setTodos((prev) =>
    //   prev.map((todo) =>
    //     todo.id === id ? { ...todo, isEdit: !todo.isEdit } : { ...todo }
    //   )
    // );
  };

  const handleChange = (event, id, teachMeUseHoc) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      dispatch(
        changeList({
          id: crypto.randomUUID(),
          text: text,
          isCompleted: false,
        })
      );
      dispatch(editTodo(null));
      // setTodos((prev) =>
      //   prev.map((item) =>
      //     item.id === id ? { ...item, text: val, isEdit: false } : item
      //   )
      // );
    }
  };

  return (
    <>
      {todo.id === idTask[0] ? (
        <div>
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            value={todo.text}
            //куда-то надо новое имя записывать
            onChange={(event) => dispatch(addChangeText(event.target.value))}
            // onChange={(e) => {
            //   setVal(e.target.value);
            // }}
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
            onClick={() => editOneTodo(todo.id, todo.text)}
          />
          <DeleteLogging
            className={styles.deleteImage}
            id={todo.id}
            // text={todo.text}
            title="Удалил таску:"
            deleteOneTodo={deleteOneTodo}
          />

          <MdDoneOutline
            className={styles.doneImage}
            onClick={() => toggleOneTodo(todo.id)}
          />
        </div>
      )}{" "}
    </>
  );
};

export default Todo;
