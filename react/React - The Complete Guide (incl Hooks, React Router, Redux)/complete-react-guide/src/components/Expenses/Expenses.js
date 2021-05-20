import React, { useState } from "react";

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
  const [filteredExpenses, setFilteredExpensesItems] = useState(items);

  const dropdownSelectedHandler = (selectedYear) => {
    /**
     * Fires when dropdown changes value
     */
    setFilteredYear(selectedYear);
    filterItemsByYear(selectedYear);
    // console.log(filteredItems);
  };

  const filterItemsByYear = (selectedYear) => {
    /**
     *
     */
    const filteredExpenses = items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });

    setFilteredExpensesItems([...filteredExpenses]);
  };

  // Condition for rendering content based on whether filteredExpenses is empty or not.
  // This works because when state updates the whole component is re-rendered (function is run again), and therefore this statement is re-evaluated
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={dropdownSelectedHandler}
        yearToShow={filteredYear}
      />

      {/* Render all expenses first (because initial value is set to items). Upon updating state, renders a filtered expenses array */}
      {expensesContent}

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
