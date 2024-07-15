import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";
import { addTask } from "../redux/slices/taskSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { addTaskInput } from "../redux/slices/addSlice";
import { useCreateToDoMutation } from "../redux/apiRQuery.js";

const TodoForm = ({ teachMeUseHoc }) => {
  const [createTask] = useCreateToDoMutation();

  const dispatch = useDispatch();
  const add = useSelector((state) => state.addSlice);

  const handleChange = async (event) => {
    const newTask = { title: add };
    if (event.key === "Enter") {
      teachMeUseHoc();
      dispatch(addTask(add));
      await createTask(newTask);
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
        type="text"
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
