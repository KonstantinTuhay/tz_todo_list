import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const DeleteTodoLogger = (props) => {
  return (
    <MdDeleteOutline
      {...props}
      onClick={() => props.deleteTodo(props.id, props.teachMeUseHoc)}
    />
  );
};

export default DeleteTodoLogger;
