import classes from './CartButton.module.css';

const CartButton = (props) => {
  const { onToggleCart } = props;
  return (
    <button onClick={onToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
