import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux'; // accessing redux store
import { cartActions } from 'store/reducers/cartReducer';

const CartItem = (props) => {
  const { title, quantity, total, price, description } = props.item;
  const dispatch = useDispatch();

  // Properties
  const cartItem = {
    title: title,
    quantity: quantity,
    total: quantity * price,
    description: description
  }

  const addCartItemHandler = () => {
    dispatch(cartActions.addItemToCart(cartItem));
  }

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(cartItem));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItemHandler}>-</button>
          <button onClick={addCartItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
