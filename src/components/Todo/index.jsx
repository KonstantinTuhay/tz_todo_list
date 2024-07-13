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
import { useDeleteToDoMutation } from "../../apiRQuery";
import { useUpdateTaskMutation } from "../../apiRQuery";

const Todo = ({ todo }) => {
  console.log(todo);
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);
  const [deleteTask] = useDeleteToDoMutation();
  const [updateTask] = useUpdateTaskMutation();

  const edit = useSelector((state) => state.editWithSlice);
  const previousEdit = useSelector((state) => state.previousEditSlice);
  const dispatch = useDispatch();

  const deleteTodo = async (id, teachMeUseHoc) => {
    await deleteTask(id);
    teachMeUseHoc();
    // dispatch(removeTask(id));
  };

  // const deleteTodo = (id, teachMeUseHoc) => {
  //   console.log(todo);
  //   teachMeUseHoc();
  //   dispatch(removeTask(id));
  // };

  // const toggleTodo = (id) => {
  //   dispatch(toggleTask(id));
  // };
  const toggleTodo = async (id) => {
    console.log("23123");
    const updatedTask = { ...todo, isCompleted: true };
    console.log(updatedTask);
    await updateTask({ id, updatedTask });
    // dispatch(toggleTask(id));
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
          <div className={styles.todoText}>{todo.title}</div>

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
