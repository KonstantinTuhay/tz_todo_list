import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("0000000000000000000");
    console.log(props);
    console.log("0000000000000000000");

    let date = new Date();
    let stringDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return <WrappedComponent {...props} stringDate={stringDate} />;
  };
};

export default withLogger;
