import React from "react";

import "./NewExpense.css"; // stylesheet

// Components
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const { onAddExpense } = props; // function to pass to App.js for the purposes of adding a new expense and re-rendering all items on the site

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
