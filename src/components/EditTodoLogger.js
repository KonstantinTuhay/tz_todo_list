import React, { useEffect, useRef } from "react";

const EditTodoLogger = (props) => {
  const focusOnEditInput = useRef(null);
  useEffect(() => {
    focusOnEditInput.current.focus();
  }, []);
  return (
    <input
      {...props}
      ref={focusOnEditInput}
      onKeyDown={(e) => props.handleChange(e, props.id, props.teachMeUseHoc)}
    />
  );
};

export default EditTodoLogger;
