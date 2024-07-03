import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoForm.module.css";
import { addNewTodo } from "../../redux/actions/listActions";
import { addTodo } from "../../redux/actions/formActions";

const TodoForm = ({ todos, setTodos, teachMeUseHoc, onChange }) => {
  // const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.form);

  // const addTodo = (text) => {
  //   const newTodo = {
  //     ...todos,
  //     text,
  //     id: crypto.randomUUID(),
  //   };
  //   setTodos([...todos, newTodo]);
  // };

  const handleChange = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(
        addNewTodo({ id: crypto.randomUUID(), todo: todo, isCompleted: false })
      );
      dispatch(addTodo(""));
      teachMeUseHoc();
      // setText(event);
      // addTodo(text);
      // setText("");
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
        value={todo}
        // onChange={(event) => setText(event.target.value)}
        onChange={(event) => dispatch(addTodo(event.target.value))}
        onKeyDown={(e) => handleChange(e)}
        ref={focusOnAddInput}
      />
    </div>
  );
};

export default TodoForm;
