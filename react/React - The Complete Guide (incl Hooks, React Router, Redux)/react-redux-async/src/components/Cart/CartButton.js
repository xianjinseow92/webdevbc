import classes from './CartButton.module.css';

import { useSelector  } from 'react-redux';

const CartButton = (props) => {
  const { onToggleCart } = props;
  const numItemsInCart = useSelector(state => state.cart.cartItems.length);
  return (
    <button onClick={onToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItemsInCart}</span>
    </button>
  );
};

export default CartButton;
