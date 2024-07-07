import React from "react";
import styles from "./index.module.css";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import { RiAppleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import EditTodoLogger from "../EditTodoLogger";
import { CiEdit } from "react-icons/ci";
import { removeTask, toggleTask, editChange } from "../redux/slices/taskSlice";
import { editTask } from "../redux/slices/editSlices";
import { previousEditTask } from "../redux/slices/previousEditSlice";
import { useSelector, useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const edit = useSelector((state) => state.editWithSlice);
  const previousEdit = useSelector((state) => state.previousEditSlice);
  const dispatch = useDispatch();

  const deleteTodo = (id, teachMeUseHoc) => {
    console.log(todo);
    teachMeUseHoc();
    dispatch(removeTask(id));
  };

  const toggleTodo = (id) => {
    dispatch(toggleTask(id));
  };

  const editTodo = (id, text) => {
    dispatch(editTask(id));
    dispatch(previousEditTask(text));
  };

  const handleChange = (event, id, teachMeUseHoc) => {
    if (event.key === "Enter") {
      console.log(event);
      teachMeUseHoc();
      dispatch(editChange({ id, previousEdit }));
      dispatch(editTask(null));
    }
  };

  return (
    <>
      {edit === todo.id ? (
        <div>
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            value={previousEdit}
            onChange={(e) => {
              dispatch(previousEditTask(e.target.value));
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
