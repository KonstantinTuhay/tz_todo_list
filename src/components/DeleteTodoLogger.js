import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import MyContext from "./tools/MyContext";

const DeleteTodoLogger = (props) => {
  const [deleteTodo] = useContext(MyContext);
  return (
    <>
      <MdDeleteOutline
        {...props}
        onClick={() => deleteTodo(props.id, props.teachMeUseHoc)}
      />
    </>
  );
};

export default DeleteTodoLogger;
