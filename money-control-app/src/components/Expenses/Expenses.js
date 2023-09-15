import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filterYear, setfilterYear] = useState("2022");

  const selectYearHandler = (year) => setfilterYear(year);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSelectYear={selectYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
