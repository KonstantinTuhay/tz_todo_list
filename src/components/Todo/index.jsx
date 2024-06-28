import React, { useState } from "react";
import { RiAppleLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";
import withLogger from "../../helpers/withLogger";
import DeleteTodoLogger from "../DeleteTodoLogger";
import EditTodoLogger from "../EditTodoLogger";
import styles from "./index.module.css";

const Todo = ({ todo, setTodos, todos, setPath, setVal, val }) => {
  const DeleteLogging = withLogger(DeleteTodoLogger);
  const EditLogging = withLogger(EditTodoLogger);

  const deleteTodo = (id, teachMeUseHoc) => {
    teachMeUseHoc();

    (async () => {
      let token = localStorage.getItem("token");
      console.log(token);
      let response = await fetch(`${process.env.REACT_APP_URL}/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      setTodos(todos.filter((todo) => todo.id !== id));

      let data = await response.json();
      console.log(data);
    })();
  };

  const toggleTodo = (id) => {
    (async () => {
      let token = localStorage.getItem("token");

      let response = await fetch(
        `${process.env.REACT_APP_URL}/todos/${id}/isCompleted`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: val,
          }),
        }
      );

      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : { ...todo }
        )
      );

      let data = await response.json();
      console.log(data);
    })();
  };

  const editTodo = (id, title) => {
    setVal(title);

    // setTodos((prev) =>
    //   prev.map((todo) =>
    //     todo.id === id ? (
    //       <input
    //       // value={title}
    //       // onChange={(e) => {
    //       //   setVal(e.target.value);
    //       // }}
    //       />
    //     ) : (
    //       { ...todo }
    //     )
    //   )
    // );
  };

  // const handleChange = (event, id) => {
  //   if (event.key === "Enter") {
  //     // teachMeUseHoc();
  //     (async () => {
  //       let token = localStorage.getItem("token");
  //       let response = await fetch(`${process.env.REACT_APP_URL}/todos/${id}`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({
  //           title: val,
  //         }),
  //       });
  //       console.log(response);
  //       setTodos((prev) =>
  //         prev.map((item) => (item.id === id ? { ...item, title: val } : item))
  //       );
  //       setPath(null);
  //       let data = await response.json();
  //       console.log(data);
  //     })();
  //   }
  // };

  return (
    <>
      {/* {false ? (
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
          />
        </div> */}
      {/* // ) : ( */}
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ""
        }`}
      >
        <RiAppleLine className={styles.appleImage} />
        <div className={styles.todoText}>{todo.title}</div>

        <CiEdit
          className={styles.editImage}
          // onClick={() => editTodo(todo.id, todo.title)}
          onClick={() => {
            setPath(todo.id);
            editTodo(todo.id, todo.title);
          }}
          // onKeyDown={(e) => handleChange(e, todo.id)}
        />
        <DeleteLogging
          className={styles.deleteImage}
          id={todo.id}
          text={todo.title}
          title="Удалил таску:"
          deleteTodo={deleteTodo}
        />

        <MdDoneOutline
          className={styles.doneImage}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
      {/* // )} */}
    </>
  );
};

export default Todo;
