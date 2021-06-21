import React, { useEffect, useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_PASSWORD":
      return { value: action.value, isValid: action.value.trim().length > 6 };
    case "INPUT_PASSWORD_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: "", isValid: false };
  }
}; // defined outside of component because it does not require any data to be passed into it.

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_EMAIL":
      return {
        value: action.value,
        isValid: action.value.trim().includes("@"),
      };
    case "INPUT_EMAIL_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().includes("@"),
      };
    default:
      return { value: "", isValid: false };
  }
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  }); // combining password states together
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  // Used to optimize how many times useEffect is executed. 
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  console.log("COMPONENT HAS RE-RENDERED");

  // useEffect(() => {
  //   /**
  //    * To understand when userEffect is run.
  //    * [] dependency: useEffect code will run only once
  //    * useEffect cleanup will run every single time BEFORE useEffect code
  //    * AND when component dismounts
  //    */
  //   console.log("EFFECT RUNNING");
  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  // Handles things as a RESPONSE to something. That's where you can use useEffect
  useEffect(() => {
    /**
     * Form validation for email and password.
     * Only validates 500s after user has stopped typing (to prevent executing setState so many times) (DEBOUNCING)
     * Achieved by using useEffect's Cleanup Function.
     * @param {function} CleanupFunction Basically a return statement in useEffect's callback func. This function will run BEFORE useEffect runs (except for the first time), and after the component has dismounted
     */

    const timerIdentifier = setTimeout(() => {
      /**
       * To only apply setState after user has stopped typing for 500 to prevent setState from being run so many times
       */
      console.log("Checking for form validity...");
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      /**
       * useEffect cleanup function. Always run before useEffect code is executed (except for the first time)
       * Clears all timers so that essentially only one timer is run
       */
      console.log("CLEANUP");
      clearTimeout(timerIdentifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    console.log("email changed");
    // setEnteredEmail(event.target.value);
    dispatchEmail({
      type: "INPUT_EMAIL",
      value: event.target.value,
    });

    // setFormIsValid(emailState.isValid && passwordState.isValid); // replaced with useEffect
  };

  const passwordChangeHandler = (event) => {
    console.log("passwod changed");
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type: "INPUT_PASSWORD",
      value: event.target.value,
    });

    // setFormIsValid(passwordState.isValid && emailState.isValid); // replaced with useEffect 
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({
      type: "INPUT_EMAIL_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: "INPUT_PASSWORD_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
