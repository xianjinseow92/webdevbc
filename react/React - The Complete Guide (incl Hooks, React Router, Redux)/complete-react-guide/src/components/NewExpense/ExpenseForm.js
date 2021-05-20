import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  /**
   * Serves to obtain an Expense from a user and add Expense to overall Expense tracker
   */

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(undefined);
    const [enteredDate, setEnteredDate] = useState(new Date());
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
        date: new Date(enteredDate)
      }
      console.log(expenseData);
      console.log(new Date());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
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
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
