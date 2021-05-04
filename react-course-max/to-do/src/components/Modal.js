function Modal(props) {
    function cancelHandler() {
        props.onCancel(); // execute the value associated with the key onCancel.
    }

    function confirmHandler() {
        props.onConfirm(); // execute the value associated with the key onConfirm.
    }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
