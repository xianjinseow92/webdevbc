import React, { useContext } from "react";

import CartContext from "store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  // All data associated with MealItem
  const { name, description, id } = props;
  const price = props.price.toFixed(2)
  const cartContext = useContext(CartContext);

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: id,
      name: name,
      description: description,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <MealItemForm addMealItem={addToCartHandler} id={id}/>
      </div>
    </li>
  );
};
export default MealItem;
