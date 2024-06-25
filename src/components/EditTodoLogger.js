import React, { useContext, useEffect, useRef } from "react";
import MyContext from "./tools/MyContext";

const EditTodoLogger = (props) => {
  const [setVal] = useContext(MyContext);
  const focusOnEditInput = useRef(null);
  useEffect(() => {
    focusOnEditInput.current.focus();
  }, []);
  // console.log(props);
  return (
    <>
      <input
        {...props}
        ref={focusOnEditInput}
        // onChange={(e) => {
        //   setVal(e.target.value);
        // }}
        onKeyDown={(e) => props.handleChange(e, props.id, props.teachMeUseHoc)}
      />
    </>
  );
};

export default EditTodoLogger;
