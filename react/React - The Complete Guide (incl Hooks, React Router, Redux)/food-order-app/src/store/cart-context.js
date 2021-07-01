import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: (id) => {}
}); // app-wide state of this variable

export default CartContext;

