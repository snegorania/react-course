import React from "react";
import { useRef } from 'react';
import styles from './NewTodo.module.css';
import { useContext } from "react";
import { toDosContext } from "../context/todos-context";

const NewToDo: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const ctx = useContext(toDosContext);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const text = inputRef.current!.value;
        if (text.trim().length === 0) {
            return;
        }
        ctx.addTodo(text);
    }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="todo">ToDo text</label>
      <input type="text" id="todo" ref={inputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewToDo;
