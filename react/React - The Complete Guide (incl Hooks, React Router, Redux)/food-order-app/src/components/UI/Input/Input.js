import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const {
    label,
    input: { id },
  } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
