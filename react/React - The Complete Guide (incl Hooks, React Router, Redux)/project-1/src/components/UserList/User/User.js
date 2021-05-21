import React from "react";

import styles from "./User.module.scss";

const User = (props) => {
  /**
   * Renders a user.
   * @param {string} name Name of user to be displayed
   * @param {string} age Age of user to be displayed
   */
  const { name, age } = props;
  return (
    <li className={styles.user}>
      {name} ({age} years old)
    </li>
  );
};

export default User;
