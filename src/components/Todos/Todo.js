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
  };

  const toggleOneTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const editOneTodo = (id) => {
    console.log("Edit--------------------------------------");
    dispatch(editTodo(id));
  };

  const handleChange = (event, id, teachMeUseHoc) => {
    console.log("Edit--------------------------------------");

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
      {todo.id === idTask[0] ? (
        <div>
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            // value={todo.text}
            onChange={(event) => dispatch(addChangeText(event.target.value))}
            title="Изменил таску:"
            dispatch={dispatch}
            addChangeText={addChangeText}
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
