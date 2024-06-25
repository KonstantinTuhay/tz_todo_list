import React, { useContext } from "react";
import styles from "./Todo.module.css";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import { RiAppleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import MyContext from "../tools/MyContext";
import EditTodoLogger from "../EditTodoLogger";
import { CiEdit } from "react-icons/ci";

// import { RiCheckboxMultipleFill } from "react-icons/ri";

const Todo = ({ todo }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const [deleteTodo, toggleTodo, editTodo, val, setVal, setTodos] =
    useContext(MyContext);

  const handleChange = (event, id, teachMeUseHoc) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      // console.log(val);
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, text: val, isEdit: false } : item
        )
      );
    }
  };
  //Будет использоваться, когда понадобиться кнопка (также сверху импорт и снизу дизайнерская кнопка)
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
          <EditLogging
            handleChange={handleChange}
            id={todo.id}
            className={styles.inputForChange}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            title="Изменил таску:"
            // onKeyDown={(e) => handleChange(e, todo.id)}
          />

          {/* <RiCheckboxMultipleFill onClick={(e) => correctEdit(e, todo.id)} /> */}
        </div>
      ) : (
        <div
          className={`${styles.todo} ${
            todo.isCompleted ? styles.completedTodo : ""
          }`}
        >
          <RiAppleLine className={styles.appleImage} />
          <div className={styles.todoText}>{todo.text}</div>

          {/* <EditLogging
            className={styles.editImage}
            // onClick={() => editTodo(todo.id, todo.text)}
            id={todo.id}
            text={todo.text}
            title="Изменил таску:"
          /> */}
          <CiEdit
            className={styles.editImage}
            onClick={() => editTodo(todo.id, todo.text)}
          />
          <DeleteLogging
            className={styles.deleteImage}
            id={todo.id}
            text={todo.text}
            title="Удалил таску:"
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
