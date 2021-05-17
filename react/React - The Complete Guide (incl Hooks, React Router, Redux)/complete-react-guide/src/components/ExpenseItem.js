import classes from "./ExpenseItem.module.scss";
import { DateTime } from "luxon";

const ExpenseItem = (props) => {
  const expenseDate = DateTime.now().toLocaleString({year: '2-digit', month: 'long', day: 'numeric'});
  console.log(expenseDate);

  return (
    <div className={classes["expense-item"]}>
      {/* <div>18 May 2021</div> */}
      <div>{expenseDate}</div>
      <div className={classes["expense-item__description"]}>
        {/* <h2>{props.title}</h2> */}
        <h2>Keyboard Parts</h2>
        {/* <div>{props.amount}</div> */}
        <div className={classes["expense-item__price"]}>SGD$300</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
