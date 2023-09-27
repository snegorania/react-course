import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={onClose}/>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
    )
};

export default Modal;
