import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  /**
   * Written outside the component because this will not use anything from the component
   * @param {object} state Represents latest state 
   * @param {object} action Represents the object passed into useReducer state updating function 
   */
  if (action.type === "ADD") {
      const updatedItems = state.items.concat(action.item); // concat returns a new array. 
      // you want to use concat because you want things to be immutable. 
      // you don't want to have to run into immutability problems because of referencing 
      const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
      return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
      } // return new state snapshot
  }
  return; // return new state snapshot
};

const CartProvider = (props) => {
  /**
   * Purpose of CartProvider component is manage CartContext data
   * and provide this CartContext data (state) to all components that want it
   */

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      /**
       * Input to dispatchCartAction usually an object
       * So that you can have a property that can lead into a switch case into your useReducer state updating function
       */
      type: "ADD",
      item: item // forward item you expect to get on reducer
    });
    console.log("Adding item to cart")
  };

  const removeItemFromCartHandler = (id) => {
      dispatchCartAction({
          type: "REMOVE",
          item: id
      });
      console.log("Removing item from cart");
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
