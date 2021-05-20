import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { expenses } = props;
  // Condition for rendering content based on whether filteredExpenses is empty or not.
  // This works because when state updates the whole component is re-rendered (function is run again), and therefore this statement is re-evaluated

  if (expenses.length === 0) return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
