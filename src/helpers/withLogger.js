import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return ({ id, todo, deleteOneTodo, addNewTodo }) => {
    // console.log(deleteOneTodo);
    useEffect(() => {
      let date = new Date();
      // console.log(deleteOneTodo);
      // console.log(addNewTodo);
      if (deleteOneTodo) {
        console.log(
          `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${deleteOneTodo.at(
            -1
          )} - delete`
        );
      } else {
        console.log(
          `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${addNewTodo.at(
            -1
          )} - add`
        );
      }
    }, [deleteOneTodo, addNewTodo]);

    return <WrappedComponent id={id} todo={todo} />;
  };
};

export default withLogger;
