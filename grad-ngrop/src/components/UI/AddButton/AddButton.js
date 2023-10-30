import React from 'react';
import styles from './AddButton.module.css';

const AddButton = ({className}) => {
    return <button className={`${styles['add-button']} ${className}`}>Add</button>
}

export default AddButton;