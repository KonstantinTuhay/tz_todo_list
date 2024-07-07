import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";
import { addTask } from "../redux/slices/taskSlice.js";
import { useDispatch } from "react-redux";

const TodoForm = ({ setText, text, addTodo, teachMeUseHoc, onChange }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      setText(event);
      addTodo(text);
      setText("");
      dispatch(addTask(text));
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
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(e) => handleChange(e)}
        ref={focusOnAddInput}
      />
    </div>
  );
};

export default TodoForm;
