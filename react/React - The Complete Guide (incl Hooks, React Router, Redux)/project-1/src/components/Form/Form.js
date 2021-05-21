import { conforms } from "lodash";
import React, { useState } from "react";

// Components
import FormattedInput from "../Functional/FormattedInput";

import styles from "./Form.module.scss";

const Form = (props) => {
  /**
   * Form component that would submit data to parent
   * @param {function} getFormValue Function to pass data back up to parent
   */
  // props from parent
  const { getFormValue } = props;

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onSubmitHander = (evt) => {
    /**
     * Retrieves data from input fields
     */
    evt.preventDefault();

    getFormValue({
      name: enteredUsername,
      age: enteredAge
    });
  };

  // Data retrieval functions
  const getUserName = (evt) => {
    setEnteredUsername(evt.target.value);
    console.log(evt.target.value);
  };

  const getUserAge = (evt) => {
    setEnteredAge(evt.target.value);
    console.log(evt.target.value);
  };

  return (
    <form onSubmit={onSubmitHander}>
      <FormattedInput
        label={"Username"}
        getValue={getUserName}
        value={enteredUsername}
      />
      <FormattedInput
        label={"Age (Years)"}
        getValue={getUserAge}
        value={enteredAge}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
