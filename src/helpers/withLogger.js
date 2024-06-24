import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
