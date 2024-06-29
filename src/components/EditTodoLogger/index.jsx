import React, { useEffect, useRef } from "react";

const EditTodoLogger = (props) => {
  const { handleChange, id, teachMeUseHoc } = props;
  const focusOnEditInput = useRef(null);
  useEffect(() => {
    focusOnEditInput.current.focus();
  }, []);
  return (
    <input
      {...props}
      ref={focusOnEditInput}
      onKeyDown={(e) => handleChange(e, id, teachMeUseHoc)}
    />
  );
};

export default EditTodoLogger;
