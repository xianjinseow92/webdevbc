import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from "react-redux";
import { cartActions } from "store/reducers/cartReducer";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, total } = props;

  const addProductHandler = () => {
    dispatch(cartActions.addItemToCart({
      title: title,
      price: price,
      quantity: 1,
      total: total,
      description: description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;