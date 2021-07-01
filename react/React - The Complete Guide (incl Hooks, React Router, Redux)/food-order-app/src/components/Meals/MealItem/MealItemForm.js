import { useRef, useState } from "react";
import Input from "components/UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const { addMealItem } = props;
  
  const [amountisValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef(); // get access to input value. done via fowardRef in <Input> Component because it is a custom component

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return; //
    }

    addMealItem(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountisValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
