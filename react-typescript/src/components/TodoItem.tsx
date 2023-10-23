import React, { MouseEvent } from "react";
import styles from "./TodoItem.module.css";

type propsType = {
  text: string,
  onRemove: () => void;
};

const Todo: React.FC<propsType> = ({ text, onRemove }) => {
  return <li className={styles.item} onClick={onRemove}>{text}</li>;
};

export default Todo;
