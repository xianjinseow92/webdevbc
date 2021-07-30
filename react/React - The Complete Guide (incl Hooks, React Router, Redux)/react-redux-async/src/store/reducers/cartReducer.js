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
  ], // array of items in cart
  showCart: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      /**
       * Reducer to add items to cartItems
       * If item already in cart, increase quanity of existing item
       * @param {object} state {cartItems: [], showCart: boolean}
       * @param {object} action {type: "UNIQUE_IDENTIFIER", payload: cartItem = {title, quantity, price, total}}
       */
      const addedItem = {...action.payload, total: action.payload.quantity * action.payload.price};

      // Check if item in cart
      const itemFromCartIndex = state.cartItems.findIndex(
        (item) => item.title === addedItem.title
      );

      if (itemFromCartIndex !== -1) {
        // if item already in cart, increase cartItem quantity by 1
        const itemFromCart = state.cartItems[itemFromCartIndex]; // retrieve item from cart
        itemFromCart.quantity += 1;
        itemFromCart.total = itemFromCart.price * itemFromCart.quantity;
        state.cartItems.splice(itemFromCartIndex, 1, itemFromCart);
      } else {
        // if item not in cart, add as new element in cartItems.
        state.cartItems.push(addedItem); // .push works because we are using reduxToolkit
      }
      console.log("Cart item added!");
    },
    removeItemFromCart(state, action) {
      /**
       * Method to remove item from cart
       * If item exists, deduct 1 from quantity
       * If item quanity only has 1 left, remove item from array entirely.
       */
    },
    showCart(state) {
      // Deals with show/hide of cart
      state.showCart = !state.showCart;
    },
  },
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
