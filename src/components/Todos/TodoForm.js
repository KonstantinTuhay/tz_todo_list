import React, { useRef, useEffect } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ setText, text, addTodo, teachMeUseHoc, onChange }) => {
  const handleChange = (event) => {
    if (event.key === "Enter") {
      teachMeUseHoc();
      // setText(event);
      addTodo(text);
      setText("");
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
