import React, { useState } from "react";

import styles from "./Modal.module.scss";

const Modal = (props) => {
  /**
   * Reusable modal to be rendered on screen.
   */
  // Parent props
  const { errorMsg, closeModal } = props;

  return (
    <>
      {
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles.title}>Invalid Input</div>
            <div className={styles.body}>
              <p>{errorMsg}</p>
            </div>
            <div className={styles.footer}>
              <button type="button" onClick={closeModal}>
                Okay
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
