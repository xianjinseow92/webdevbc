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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // get index of item in state.items array that is the same as the new item's id
    const existingCartItem = state.items[existingCartItemIndex]; // retrieve the item that exists in state's item array
    let updatedItems;

    if (existingCartItem) {
      // to collapse all same items into a single item
      const updatedItem = {
        ...existingCartItem, // copy everything from the existing item
        amount: existingCartItem.amount + action.item.amount, // replace amount property
      };
      updatedItems = [...state.items]; // create a new array without editing the old array in memory
      updatedItems[existingCartItemIndex] = updatedItem; // replace position of existing item with the updatedItem (collapsed and amount combined)
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }; // return new state snapshot
  }

  if (action.type === "REMOVE") {
    // minus one or remove item entirely
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      // want to remove entire item for array if it's the last item
      updatedItems = state.items.filter((item) => item.id !== action.item); // this removes the item from the state.items array entirely (NOT AMOUNT)
    } else {
      // if item is greater than 1, we don't want to remove item from array
      // just want to reduce the amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; // decrease amount of existing item by 1
      updatedItems = [...state.items]; // copy whole state array to prevent any reference bugs
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState; // return new state snapshot
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
      item: item, // forward item you expect to get on reducer
    });
    console.log("Adding item to cart");
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      item: id,
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
