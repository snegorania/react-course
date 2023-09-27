import React, {useRef} from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../../UI/Input/Input';

const MealItemForm = ({onAddToCart}) => {
    const amountRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        if(!enteredAmount) {
            return;
        }
        onAddToCart(+enteredAmount);

    }
    return <form onSubmit={handleSubmit} className={styles.form}>
        <Input ref={amountRef} label={"Amount"} input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;