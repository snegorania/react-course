import React from 'react';
import styles from './DeleteButton.module.css'

const DeleteButton = ({onClick, className}) => {
    const classes = `${styles['delete-button']} ${className}`;
    return <button onClick={onClick} className={classes}>Delete</button>
}

export default DeleteButton;