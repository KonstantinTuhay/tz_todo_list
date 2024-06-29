import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const DeleteTodoLogger = (props) => {
  const { id, deleteTodo, teachMeUseHoc } = props;
  return (
    <MdDeleteOutline {...props} onClick={() => deleteTodo(id, teachMeUseHoc)} />
  );
};

export default DeleteTodoLogger;
