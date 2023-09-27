import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";

const MealItemForm = ({ onAddToCart }) => {
  const [isValid, setIsvalid] = useState(true);
  const amountRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsvalid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        ref={amountRef}
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
