import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  /**
   * Changes template according to year selected on dropdown
   */

  const { onChangeFilter, yearToShow } = props; // pass value back up to parent, Expenses.js

  const dropdownChangeHandler = (evt) => {
    // console.log(evt.target.value);
    onChangeFilter(evt.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={yearToShow}>
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
