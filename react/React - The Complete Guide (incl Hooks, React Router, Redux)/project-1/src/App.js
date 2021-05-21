import React, { useState } from "react";

import "./App.css";

// Components
import UserList from "./components/UserList/UserList";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

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
  const [showModal, setShowModal] = useState(false);
  const [modalErrorMsg, setModalerrorMsg] = useState("");

  const addUser = (evt) => {
    setUsers((prevState) => {
      return [evt, ...prevState];
    });
  };

  // Modal 
  const openModal = (modalErrorMsg) => {
    setModalerrorMsg(modalErrorMsg);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <Modal closeModal={closeModal} errorMsg={modalErrorMsg}/>}
      <Container>
        <div className="App">
          {/* Form to add shit */}
          <Card>
            <Form getFormValue={addUser} openModal={openModal}/>
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
    </>
  );
}

export default App;
