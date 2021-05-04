import { useState } from "react";

// Components
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  // props are key-value pairs of attributes & their values on each <Todo /> tags

  /**
   * @param useState A react hook that always returns an array with exactly two elements.
   * @return [value, functionThatAllowsYouToChangeValue]
   */
  const [modalIsOpen, setModelIsOpen] = useState(false); // react hook, can only be called in react component functions. creates a state that react is aware of.

  // Nested function
  function deleteHandler() {
     setModelIsOpen(true); // function that allows you to change the value of modalIsOpen field. created by useState() function
  }

  function closeModalHandler() {
    /**
     * When run, sets modalIsOpen to false.
     * Passed into Backdrop through onCancel, of which this function is then activated via an onClick attribute on the div itself in Backdrop
     */
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      {/* Anything inside {} is executed as a SINGLE LINE javascript expression (so if checks and stuff will not work) */}
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null }
      { modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null }
    </div>
  );
}

export default Todo;
