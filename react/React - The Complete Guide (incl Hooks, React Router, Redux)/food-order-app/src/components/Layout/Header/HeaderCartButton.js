import { useContext } from "react";
import CartContext from "store/cart-context";
import CartIcon from "components/Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { onClick } = props;
  const cartContext = useContext(CartContext);
  // const numberOfCartItems = cartContext.items.length; // this would be wrong because this is just the number of objects in the array. 
  // however, each object represents a food item category (sushi, let's say)
  // which each have an amount of food ordered (number of sushi ordered
  
  // Therefore, we should use a reduce method to access the value of the items
  const numberOfCartItems = cartContext.items.reduce((accumulatedValue, cartItem) => {
    return accumulatedValue + cartItem.amount;
  }, 0);


  return <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
          <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
  </button>;
};

export default HeaderCartButton;
