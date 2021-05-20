import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
    const {expenses} = props;
  // Condition for rendering content based on whether filteredExpenses is empty or not.
  // This works because when state updates the whole component is re-rendered (function is run again), and therefore this statement is re-evaluated
  let expensesContent = <p>No expenses found.</p>;

  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return expensesContent;
};

export default ExpensesList;
