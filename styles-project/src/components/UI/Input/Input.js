import React from "react";

import "./Input.css";

const Input = ({ id, name, onEnter, value, placeholder, isValid}) => {

  const handleChange = ({ target: { value } }) => {
    onEnter(value);
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`input ${!isValid && 'invalid'}`}
    />
  );
};

export default Input;
