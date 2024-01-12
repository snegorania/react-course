import React, {forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({remainingTime, targetTime, onReset,}, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    const youLost = remainingTime <= 0;
    const score = Math.round((1 - remainingTime/(targetTime)) * 100);

    return createPortal(<dialog className="result-modal" ref={dialog}>
        <h2>{youLost? "You lost": `Your score ${score}`}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped timer with <strong>{remainingTime}</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>, document.getElementById("modals"))
})

export default Modal;