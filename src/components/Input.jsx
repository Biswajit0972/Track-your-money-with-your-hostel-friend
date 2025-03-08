import React from "react";

const Input = ({
  className,
  type,
  name,
  icon,
  lableclass,
  disable,
  value,
  onchange,
}) => {
  return (
    <div className={`w-full flex-between`}>
      <label htmlFor={name} className={lableclass}>{`${icon} ${name}:`}</label>
      <input
        type={type}
        name={name}
        className={className}
        disabled={disable}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
