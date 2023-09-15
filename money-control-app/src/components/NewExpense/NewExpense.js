import React, {useState} from 'react';

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({onNewExpense}) => {

    const [toggle, setToggle] = useState(true);

    const saveFormHandler = value => {
        onNewExpense(value);
        setToggle(true);
    }

    const canselFormHandler = () => setToggle(true);

    const startEditingHandler = () => setToggle(false);

    return(
        <div className="new-expense">
            {toggle ?
            <button onClick={startEditingHandler}>Add New Expense</button> :
            <ExpenseForm onSaveForm={saveFormHandler} onCanselForm={canselFormHandler}/>}
        </div>
    )
}

export default NewExpense;