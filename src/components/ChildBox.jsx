import React from "react";

const ChildBox = ({ children, className }) => {
  return <div className={`${className} childbox`}>{children}</div>;
};

export default ChildBox;
