import React, { useEffect, useRef } from "react";

const EditTodoLogger = (props) => {
  const focusOnEditInput = useRef(null);
  const { addChangeText, dispatch, handleChange, id, teachMeUseHoc } = props;
  useEffect(() => {
    focusOnEditInput.current.focus();
  }, []);
  return (
    <>
      <input
        {...props}
        // onChange={(event) => dispatch(addChangeText(event.target.value))}
        ref={focusOnEditInput}
        onKeyDown={(e) => handleChange(e, id, teachMeUseHoc)}
      />
    </>
  );
};

export default EditTodoLogger;
