import React, { useState } from "react";

// Components
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={dropdownSelectedHandler}
        yearToShow={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>

      {/* Render all expenses first (because initial value is set to items). Upon updating state, renders a filtered expenses array */}
      <ExpensesList expenses={filteredExpenses}/>

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
