import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux'; // accessing redux store
import { cartActions } from 'store/reducers/cartReducer';

const CartItem = (props) => {
  const { title, quantity, total, price, description } = props.item;
  const dispatch = useDispatch();

  const addCartItemHandler = () => {
    const cartItem = {
      title: title,
      quantity: quantity,
      total: quantity * price,
      description: description
    }
    dispatch(cartActions.addItemToCart(cartItem));
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
          <button>-</button>
          <button onClick={addCartItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
