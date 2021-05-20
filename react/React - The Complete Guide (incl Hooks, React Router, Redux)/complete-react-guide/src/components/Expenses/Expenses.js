import React , { useState }from "react";

// Components
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

// Styling
import "./Expenses.css";

const Expenses = (props) => {
  // From parent
  const { items } = props;

  // Component fields
  const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const dropdownSelectedHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={dropdownSelectedHandler} yearToShow={filteredYear}/>

      {/* Render all expenses */}
      {items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
