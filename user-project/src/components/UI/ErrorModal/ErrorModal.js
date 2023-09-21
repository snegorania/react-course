import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={() => onClose()}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={() => onClose()}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
