import React, {useState} from 'react';
import {nanoid} from 'nanoid';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveForm, onCanselForm }) => {

    const [expense, setExpense] = useState({inTitle: '', inAmount: '', inDate: ''});

    const changeHandler = ({target: {name, value} }) => {
        setExpense((prevExpense) => {
            return {...prevExpense, [name]: value}
        })
    }

    const submitHandler = e => {
        e.preventDefault();

        const expanseData = {
            id: nanoid(),
            title: expense.inTitle,
            amount: expense.inAmount,
            date: new Date (expense.inDate)
        }

        setExpense({inTitle: '', inAmount: '', inDate: ''});
        onSaveForm(expanseData);
    }

    const cancelHandler = () => onCanselForm();

    return(
        <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='inTitle'
            value={expense.inTitle}
            onChange={changeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name='inAmount'
            value={expense.inAmount}
            onChange={changeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            name='inDate'
            value={expense.inDate}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    )
}

export default ExpenseForm;