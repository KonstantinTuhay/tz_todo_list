import React from "react";
import styles from "./Todo.module.css";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import EditTodoLogger from "../EditTodoLogger";
import { deleteTodo } from "../../redux/actions/deleteActions";
import { toggleTodo } from "../../redux/actions/toggleActions";
import { editTodo } from "../../redux/actions/editActions";
import { addChangeText } from "../../redux/actions/addChangeActions";
import { changeList } from "../../redux/actions/changeListAction";
import { RiAppleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.change);
  const { id } = useSelector((state) => state.edit);
  console.log(id);

  const deleteOneTodo = (id, teachMeUseHoc) => {
    teachMeUseHoc();
    dispatch(deleteTodo(id));
  };

  const toggleOneTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const editOneTodo = (id, text) => {
    dispatch(editTodo(id));
    dispatch(addChangeText(text));
  };

  const handleChange = (event, id, teachMeUseHoc) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      dispatch(
        changeList({
          id: id,
          text: text,
        })
      );
      dispatch(editTodo(null));
    }
  };

  return (
    <>
      {todo.id === id ? (
        <div>
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            value={text}
            onChange={(event) => dispatch(addChangeText(event.target.value))}
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
