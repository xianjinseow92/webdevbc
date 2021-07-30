import { createSlice } from "@reduxjs/toolkit";

// Schematic for cartItem object
// const cartItem = {
//   title: "",
//   quantity: 0,
//   price: 0,
//   total: 0,
//   description: "",
// };

// Initial State
const initialCartState = {
  cartItems: [
    {
      title: "Test",
      price: 6,
      quantity: 2,
      total: 12,
    },
    {
      title: "Prod 2",
      price: 2,
      quantity: 2,
      total: 4,
    },
  ] // array of items in cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      /**
       * Reducer to add items to cartItems
       * If item already in cart, increase quanity of existing item
       * @param {object} state {cartItems: []}
       * @param {object} action {type: "UNIQUE_IDENTIFIER", payload: cartItem = {title, quantity, price, total}}
       */
      const addedItem = action.payload;

      // Check if item in cart
      const itemFromCartIndex = state.cartItems.findIndex(
        (item) => item.title === addedItem.title
      );

      if (itemFromCartIndex !== -1) {
        // if item already in cart, increase cartItem quantity by 1
        const itemFromCart = state.cartItems[itemFromCartIndex]; // retrieve item from cart
        const modifiedItemFromCart = modifyCartItem(itemFromCart, "ADD");
        state.cartItems.splice(itemFromCartIndex, 1, modifiedItemFromCart);
      } else {
        // if item not in cart, add as new element in cartItems.
        state.cartItems.push(addedItem); // .push works because we are using reduxToolkit
      }
      console.log("Cart item added!");
    },
    removeItemFromCart(state, action) {
      /**
       * Method to remove item from cart
       * If item exists, and quantity > 1 deduct 1 from quantity
       * If item quanity only has 1 left, remove item from array entirely.
       * @param {object} state Latest state snapshot of cart reducer in store
       * @param {object} action {type: UNIQUE_TYPE_IDENTIFIER, action: <data passed into action creator>}
       */
      const cartItemToRemove = action.payload;

      const itemFromCartIndex = state.cartItems.findIndex(
        (cartItemInCart) => cartItemInCart.title === cartItemToRemove.title
      );
      if (itemFromCartIndex !== -1) {
        const itemFromCart = state.cartItems[itemFromCartIndex];
        // if item exists and quantity greater than 1, deduct 1 from quantity
        if (itemFromCart.quantity > 1) {
          const modifiedCartItemFromCart = modifyCartItem(
            itemFromCart,
            "REMOVE"
          );
          state.cartItems.splice(
            itemFromCartIndex,
            1,
            modifiedCartItemFromCart
          );
        } else {
          // completely remove item from cart if quantity below 1
          state.cartItems.splice(itemFromCartIndex, 1);
        }
      }

      console.log("Cart item removed!");
    }
  }
});

const modifyCartItem = (cartItem, operation) => {
  switch (operation) {
    case "ADD":
      cartItem.quantity += 1;
      return {
        ...cartItem,
        total: cartItem.quantity * cartItem.price,
      };
    case "REMOVE":
      cartItem.quantity -= 1;
      return {
        ...cartItem,
        total: cartItem.quantity * cartItem.price,
      };
    default:
      return cartItem;
  }
};

const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export default cartReducer;
