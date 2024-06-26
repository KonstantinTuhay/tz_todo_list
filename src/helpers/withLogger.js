import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    const teachMeUseHoc = () => {
      const date = new Date();
      const stringDate = `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      console.log(`${stringDate} ${props.title} ${props.text || props.value}`);
    };

    return <WrappedComponent {...props} teachMeUseHoc={teachMeUseHoc} />;
  };
};

export default withLogger;
