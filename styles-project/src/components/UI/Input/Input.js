import React, { useState } from "react";

import "./Input.css";

const Input = ({ id, name, onEnter, value, placeholder}) => {
  const [val, setVal] = useState(value);

  const handleChange = ({ target: { value } }) => {
    setVal(value);
    onEnter(val);
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      value={val}
      onChange={handleChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
