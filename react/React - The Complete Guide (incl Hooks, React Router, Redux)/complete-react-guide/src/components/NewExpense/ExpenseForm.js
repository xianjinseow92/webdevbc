import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  /**
   * Serves to obtain an Expense from a user and add Expense to overall Expense tracker
   */
  const [enteredTitle, setEnteredTitle] = useState(''); 
  const [enteredAmount, setEnteredAmount] = useState(undefined);
  const [enteredDate, setEnteredDate] = useState(new Date());


  const expense = {
      title: "",
      amount: 0,
      date: new Date()
  }

  const titleChangeHandler = (evt) => {
      const { value } = evt.target;
      setEnteredTitle(value); // purpose of setting this setState() here is not for re-rendering the component (although it will happen when you always update the state), but doing it to ensure this value is stored in some kind of variable that is detached from the lifecycle of this component
      // so that no matter how often this component is executed again, this state is STORED and SURVIVES
      console.log(value);
  };

  const amountChangeHandler = (evt) => {
    const { value } = evt.target;
    const valueFloat = parseFloat(value);
    setEnteredAmount(parseFloat(valueFloat));
    console.log(valueFloat);
    console.log(typeof valueFloat);
}

  const dateChangeHandler = (evt) => {
      const { value } = evt.target;
      setEnteredDate(value);
      console.log(value);
      console.log(typeof value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
