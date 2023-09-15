import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onSelectYear }) => {
  const [selectedVal, setSelectedVal] = useState(selected);

  const dropdownChangeHandler = ({ target: { value } }) => {
    setSelectedVal(value);
    onSelectYear(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedVal} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
