import React, { useState } from "react";

import "./App.css";

// Components
import UserList from "./components/UserList/UserList";
import Form from "./components/Form/Form";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  /**
   * App component that holds everything.
   * Manages data.
   * Retrival of user data from form
   * Updating of User to User List
   */

  const [users, setUsers] = useState([]);

  const submitHandler = (evt) => {
    setUsers((prevState) => {
      return [evt, ...prevState];
    });
  };

  return (
    <Container>
      <div className="App">
        {/* Form to add shit */}
        <Card>
          <Form getFormValue={submitHandler} />
        </Card>

        {/* Conditional rendering */}
        {/* User list > user (wrapped in card) */}
        {users.length !== 0 && (
          <Card>
            <UserList users={users} />
          </Card>
        )}
      </div>
    </Container>
  );
}

export default App;
