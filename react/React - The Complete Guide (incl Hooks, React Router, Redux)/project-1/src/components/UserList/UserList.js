import React from "react";

// Components
import User from "./User/User";

import styles from "./UserList.module.scss";

const UserList = (props) => {
  /**
   * Component essentially serves to render a list of users.
   * Serves to pass data into a Dumb Component User
   * @param {User[]} users List of user objects
   */

//   const { users } = props;

const users = [
    {
        name: 'xj',
        age: 6
    },
    {
        name: 'crrystal',
        age: 69
    },
]

  return (
    <ul className={styles['user-list']}>
      {/* List of users to display, if users exists */}
      {users.length !== 0 && users.map(user => {
          return <User name={user.name} age={user.age}/>
      })}
    </ul>
  );
};

export default UserList;
