import React, { useState } from "react";

import styles from "./CourseGoalInput.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import { nanoid } from "nanoid";

const CourseGoalInput = ({onFormSubmit}) => {
  const [val, setVal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEnter = (value) => {
    setIsValid(true);
    setVal(value);
  };

  const handleButtonClick = () => {
    if (val.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onFormSubmit({
      id: nanoid(),
      goal: val
    })
    setVal('');
  }

  return (
    <Card className={styles.form}>
        <h1 className={`${styles['form-header']} ${!isValid && styles.invalid}`}>Couse goals</h1>
      <Input
        id={"goal"}
        name={"goal"}
        onEnter={handleEnter}
        value={val}
        placeholder={"Enter Goal"}
        isValid={isValid}
      />
      <Button onClick={handleButtonClick} invalid={!isValid}> Add</Button>
    </Card>
  );
};

export default CourseGoalInput;
