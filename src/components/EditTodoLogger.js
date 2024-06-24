import React, { useContext } from "react";
import MyContext from "./tools/MyContext";
import { CiEdit } from "react-icons/ci";

const EditTodoLogger = (props) => {
  // console.log("--------------");
  // console.log(props);
  // console.log("--------------");

  const [editTodo] = useContext(MyContext);

  return (
    <>
      <CiEdit
        {...props}
        onClick={() =>
          editTodo(props.id, props.text, props.stringDate, props.title)
        }
        // onClick={() =>
        //   deleteTodo(props.id, props.text, props.stringDate, props.title)
        // }
      />
    </>
  );
};

export default EditTodoLogger;
