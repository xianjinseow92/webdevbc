import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /**
   * Serves to obtain an Expense from a user and add Expense to overall Expense tracker.
   * Upon submission, input fields also get cleared (via two-way binding)
   * Two-way binding: assigning state variables to input.value and using useState to re-render component
   */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const { onSaveExpenseData } = props; // function that will retrieve expenseData (to be passed to parent)
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: 0,
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (evt) => {
    const { value } = evt.target;
    setEnteredTitle(value); // purpose of setting this setState() here is not for re-rendering the component (although it will happen when you always update the state), but doing it to ensure this value is stored in some kind of variable that is detached from the lifecycle of this component
    // so that no matter how often this component is executed again, this state is STORED and SURVIVES
    console.log(value);

    // // Object method
    // setUserInput((prevUserInputState) => {
    //   return {
    //     ...prevUserInputState,
    //     enteredTitle: evt.target.value,
    //   };
    // });

    // console.log(userInput);
  };

  const amountChangeHandler = (evt) => {
    const { value } = evt.target;
    const valueFloat = parseFloat(value);
    setEnteredAmount(parseFloat(valueFloat));
    console.log(valueFloat);
    console.log(typeof valueFloat);

    // // Object Method
    // setUserInput((prevUserInputState) => {
    //   return {
    //     ...prevUserInputState,
    //     enteredAmount: evt.target.value,
    //   };
    // });

    // console.log(userInput);
  };

  const dateChangeHandler = (evt) => {
    const { value } = evt.target;
    setEnteredDate(value);
    console.log(value);
    console.log(typeof value);

    // // Object Method
    // setUserInput((prevUserInputState) => {
    //     return {
    //         ...prevUserInputState,
    //         enteredDate: evt.target.value
    //     }
    // })

    // console.log(userInput);
  };

  const submitHandler = (evt) => {
    evt.preventDefault(); // prevent default behavior of form refreshing page
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    // Clear inputs
    clearInputs();
  };

  const clearInputs = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
