import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 300,
};

const modal = ({ onClose, show }) => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    in={show}
    timeout={animationTiming}
    classNames={{
      enterActive: "ModalOpen",
      exitActive: "ModalClose",
    }}
  >
    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={onClose}>
        Dismiss
      </button>
    </div>
  </CSSTransition>
);

export default modal;
