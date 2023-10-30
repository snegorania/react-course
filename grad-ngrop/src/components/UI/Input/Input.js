import React from "react";
import styles from './Input.module.css';

const Input = ({name, id, onChange, className, placeholder, value}) => {
    const classes = `${styles.input} ${className}`
    return <input type='text' id={id} name={name} onChange={onChange} className={classes} placeholder={placeholder} value={value}/>
}

export default Input