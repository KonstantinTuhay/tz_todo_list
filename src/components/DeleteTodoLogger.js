import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const DeleteTodoLogger = (props) => {
  const { deleteOneTodo, id, teachMeUseHoc } = props;
  return (
    <>
      <MdDeleteOutline
        {...props}
        onClick={() => deleteOneTodo(id, teachMeUseHoc)}
      />
    </>
  );
};

export default DeleteTodoLogger;
