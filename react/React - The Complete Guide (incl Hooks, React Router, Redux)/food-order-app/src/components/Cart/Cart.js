import React, { useContext } from "react";

import Modal from "components/UI/Modal/Modal";
import CartItem from "./CartItem";

import CartContext from "store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  /**
   * Cart opens when cart button on header is clicked.
   * Cart closes when backdrop is clicked
   */
  const cartContext = useContext(CartContext);

  // const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
  //   (item) => <li key={item.id}>{item.name}</li>
  // );

  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartContext.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id} {...item} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
      ))}
    </ul>
  );

  const { hideCart } = props; // passed down from parent; cart-closing function

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
