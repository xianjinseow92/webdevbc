import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // cartItem = {
  //   title: String,
  //   price: Number,
  //   quanity: Number,
  //   total: Number,
  //   description: String
  // }

  const cartContainsItems = cartItems.length !== 0;
  const allCartItems = cartItems.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.title}
        item={{
          ...cartItem,
        }}
      />
    );
  });
  const cartIsEmpty = <h1>Add products below to fill up your cart!!</h1>;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartContainsItems ? allCartItems : cartIsEmpty}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
