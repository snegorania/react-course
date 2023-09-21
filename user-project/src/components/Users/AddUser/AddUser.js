import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./AddUser.module.css";
import { nanoid } from "nanoid";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const errorHandler = () => setError(null);

  const handleUserName = ({ target: { value } }) => {
    setEnteredUserName(value);
  }
  const handleAge = ({ target: { value } }) => {
    setEnteredAge(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const user = {
      id: nanoid(),
      name: enteredUserName,
      age: enteredAge,
    };

    onAddUser(user);

    setEnteredUserName('');
    setEnteredAge('');
  };

  return (
    <div>
        {
        error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler}/>
    }
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={handleUserName}
          />
          <label htmlFor="age">Username</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={handleAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
