import React from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ setText, text, addTodo, stringDate, title }) => {
  const handleChange = (event) => {
    if (event.key === "Enter") {
      console.log(title, stringDate);

      setText(event);
      addTodo(text);
      setText("");
    }
  };

  // const handleClick = (event) => {
  //   setText(event);
  //   addTodo(text);
  //   setText("");
  // };

  return (
    <div className={styles.todoForm}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(e) => handleChange(e)}
      />
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
  );
};

export default TodoForm;
