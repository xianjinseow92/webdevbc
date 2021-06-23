import React from "react";

import Modal from "components/UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    /**
     * Cart opens when cart button on header is clicked.
     * Cart closes when backdrop is clicked
     */
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  const { hideCart } = props; // passed down from parent; cart-closing function

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
