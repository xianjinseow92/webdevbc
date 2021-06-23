import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const overlayroot = document.getElementById("overlays");

const Backdrop = (props) => {
  const { hideCart } = props; 
  return <div className={classes.backdrop} onClick={hideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
  );
};

const Modal = (props) => {
  const { hideCart } = props; // hide cart function, passed down from App > Cart 

  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideCart={hideCart}/>, overlayroot)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayroot
      )}
    </>
  );
};

export default Modal;
