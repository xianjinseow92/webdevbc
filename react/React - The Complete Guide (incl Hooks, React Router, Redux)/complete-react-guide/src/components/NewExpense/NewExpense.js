import React from "react";

import "./NewExpense.css"; // stylesheet

// Components
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;