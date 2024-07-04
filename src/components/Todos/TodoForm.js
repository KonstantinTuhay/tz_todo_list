import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions/listActions";
import { addTodo } from "../../redux/actions/formActions";
import styles from "./TodoForm.module.css";

const TodoForm = ({ teachMeUseHoc }) => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.form);

  const handleChange = (event) => {
    if (event.key === "Enter") {
      if (text.length > 0) {
        event.preventDefault();
        dispatch(
          addNewTodo({
            id: crypto.randomUUID(),
            text: text,
            isCompleted: false,
          })
        );
        dispatch(addTodo(""));
        teachMeUseHoc();
      }
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
        onChange={(event) => dispatch(addTodo(event.target.value))}
        onKeyDown={(e) => handleChange(e)}
        ref={focusOnAddInput}
      />
    </div>
  );
};

export default TodoForm;
