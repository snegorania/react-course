import React, { useRef, useImperativeHandle } from "react";
import classes from './Input.module.css'

const Input = React.forwardRef(({id, type, value, onChange, onBlur, label, isValid}, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {focus: activate}
    })

    const activate = () => {
        inputRef.current.focus();
    }

    return(
        <div
          className={`${classes.control} ${
            !isValid ? classes.invalid : ''
          }`}
        >
          <label htmlFor={id}>{label}</label>
          <input
            ref={inputRef} 
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
    );
});

export default Input;