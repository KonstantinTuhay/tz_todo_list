import React, { useContext } from "react";
import MyContext from "./tools/MyContext";

const EditTodoLogger = (props) => {
  const [setVal] = useContext(MyContext);
  // console.log(props);
  return (
    <>
      <input
        {...props}
        // onChange={(e) => {
        //   setVal(e.target.value);
        // }}
        onKeyDown={(e) => props.handleChange(e, props.id, props.teachMeUseHoc)}
      />
    </>
  );
};

export default EditTodoLogger;
