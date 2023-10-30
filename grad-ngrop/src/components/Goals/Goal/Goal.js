import React from "react";
import DeleteButton from "../../UI/DeleteButton/DeleteButton";
import styles from "./Goal.module.css";

const Goal = ({ text, id, onDelete }) => {
  return (
    <>
      <p className={styles['goal-text']}>{text}</p>
      <DeleteButton onClick={onDelete.bind(null, id)} />
    </>
  );
};

export default Goal;
