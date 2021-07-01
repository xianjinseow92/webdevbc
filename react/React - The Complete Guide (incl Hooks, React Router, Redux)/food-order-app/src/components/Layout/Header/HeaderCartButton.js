import { useContext, useEffect, useState } from "react";
import CartContext from "store/cart-context";
import CartIcon from "components/Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { onClick } = props;

  const [btnIsHighlighted, setBtnIsHightlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const {items} = cartContext;
  // const numberOfCartItems = cartContext.items.length; // this would be wrong because this is just the number of objects in the array.
  // however, each object represents a food item category (sushi, let's say)
  // which each have an amount of food ordered (number of sushi ordered

  // Therefore, we should use a reduce method to access the value of the items
  const numberOfCartItems = items.reduce(
    (accumulatedValue, cartItem) => {
      return accumulatedValue + cartItem.amount;
    },
    0
  );

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  
  
  useEffect(() => {
    if (items.length === 0) return; // prevent execution of code below if there are no items in the array
    setBtnIsHightlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);

    // if you add a return function in useEffect, a cleanup function is run
    return () => {
      // function run after all code in useEffect run
      clearTimeout(timer); // to clear the timer
    }

  }, [items]);

  

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
