import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";
import { addTask } from "../redux/slices/taskSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { addTaskInput } from "../redux/slices/addSlice";

const TodoForm = ({ setText, text, addTodo, teachMeUseHoc, onChange }) => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.addSlice);

  const handleChange = (event) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      dispatch(addTask(add));
      dispatch(addTaskInput(""));
    }
  };

  const focusOnAddInput = useRef(null);
  useEffect(() => {
    focusOnAddInput.current.focus();
  }, []);

  return (
    <div className={styles.todoForm}>
      <input
        placeholder="Enter new todo"
        value={add}
        onChange={(event) => dispatch(addTaskInput(event.target.value))}
        onKeyDown={(e) => handleChange(e)}
        ref={focusOnAddInput}
      />
    </div>
  );
};

export default TodoForm;
