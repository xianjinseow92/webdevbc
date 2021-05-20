import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // changing state will cause THIS component to be re-rendered again (re-rendering meaning this WHOLE FUNCTION IS CALLED AGAIN)
  /**
   * Basically, if you have properties that need to be re-evaluated and then re-updated onto the User Interface, you HAVE to use state.
   * And ONLY THIS COMPONENT will update
   */

  /**
   * State, Properties, Variables
   */
  const [title, setTitle] = useState(props.title); // set initial value for variable of which we want to be re-reflected if value changes, and get function that handles changing that value
  console.log("ExpenseItem re-evaluated by React!");
  /**
   * Functions pertaining to this component
   */
  const clickHandler = () => {
    setTitle("Poopy Pants"); // changes title variable and re-evaluates the component ExpenseItem again (runs ExpenseItem function)
    // Will then also re-evaluate the JSX code again
    // any changes detected will then draw any changes it detects (compared to the last time) onto the screen

    console.log(title); // you will notice that this line actually doesn't call the NEW variable, but the previous one.
    // this is because useState doesn't change the variable right away.
    // it SCHEDULES this state update
    // therefore, the value of `title` in `console.log(title)` after `setState()` logs the old value, because the value isn't updated yet.
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
