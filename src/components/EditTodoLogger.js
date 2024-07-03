import React, { useEffect, useRef } from "react";

const EditTodoLogger = (props) => {
  const focusOnEditInput = useRef(null);
  const { handleChange, id, teachMeUseHoc } = props;
  useEffect(() => {
    focusOnEditInput.current.focus();
  }, []);
  return (
    <>
      <input
        {...props}
        ref={focusOnEditInput}
        onKeyDown={(e) => handleChange(e, id, teachMeUseHoc)}
      />
    </>
  );
};

export default EditTodoLogger;
