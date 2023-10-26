import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(({onSubmitIngredient, loading}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleTitle = ({target: {value}}) => setTitle(value);
  const handleAmount = ({target: {value}}) => setAmount(value);

  const submitHandler = event => {
    event.preventDefault();
    onSubmitIngredient({title, amount});
    setTitle('');
    setAmount('');
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={title} onChange={handleTitle} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={handleAmount} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {loading && <LoadingIndicator/>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
