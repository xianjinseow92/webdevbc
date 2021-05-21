import React, { useState } from "react";

import "./NewExpense.css"; // stylesheet

// Components
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  /**
   * Component serves as container for form
    * Also serves to conditionally render an "Add Expense" button or the Add Expense Form
    * @param {function} onAddExpense Parent function from App.js for the purposes of adding a new expense and re-rendering all expenses on the website
   */
  const [isEditing, setIsEditing] = useState(false);
  const { onAddExpense } = props; // function to pass to App.js for the purposes of adding a new expense and re-rendering all items on the site

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
