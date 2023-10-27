import React from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ children }) => {
  return (
    <>
      <Link to='/' className={styles.backdrop} />
      <dialog open className={styles.modal}>{children}</dialog>
    </>
  );
};

export default Modal;
