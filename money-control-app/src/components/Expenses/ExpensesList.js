import React from "react";
import ExpensesItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">No such expenses</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
