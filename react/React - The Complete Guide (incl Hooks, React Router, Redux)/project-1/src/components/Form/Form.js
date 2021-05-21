import React, { useState } from "react";

// Components
import FormattedInput from "../Functional/FormattedInput";

const Form = (props) => {
  /**
   * Form component that would submit data to parent
   * @param {function} getFormValue Function to pass data back up to parent
   * @param {function} openModal Function to open modal. Takes a string parameter to display an error message on modal
   */
  // props from parent
  const { getFormValue, openModal } = props;

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  let modalErrorMsg = "";

  const onSubmitHander = (evt) => {
    /**
     * Retrieves data from input fields
     */
    evt.preventDefault();
    if (enteredUsername === "" && enteredAge === "") {
      modalErrorMsg = "You didn't enter a name AND age you dumb shit.";
      openModal(modalErrorMsg);
    } else if (enteredUsername === "") {
      modalErrorMsg = ".. Do you not have a name?";
      openModal(modalErrorMsg);
    } else if (+enteredAge < 0 || enteredAge === "") {
      modalErrorMsg = "Dude, seriously, enter a proper age.";
      openModal(modalErrorMsg);
    } else {
      submitFormValues();
    }
  };

  const submitFormValues = () => {
    getFormValue({
      name: enteredUsername,
      age: enteredAge,
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
