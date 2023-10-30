import React, { useState } from "react";
import Input from "../Input/Input";
import AddButton from "../AddButton/AddButton";
import styles from "./Form.module.css";

const Form = ({ name, id, placeholder, onSubmit }) => {
  const [val, setVal] = useState("");
  
  const handleChange = ({ target: { value } }) => setVal(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(val);
    setVal('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={val}
      />
      <AddButton />
    </form>
  );
};

export default Form;
