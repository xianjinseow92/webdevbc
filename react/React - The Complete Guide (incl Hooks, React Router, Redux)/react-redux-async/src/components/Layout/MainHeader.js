import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

import { useDispatch } from "react-redux"; // for accessing redux store
import { cartUIActions } from 'store/reducers/cart-ui';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  
  const toggleCartHandler = () => {
    dispatch(cartUIActions.showCart());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onToggleCart={toggleCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
