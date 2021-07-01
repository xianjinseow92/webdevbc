
import CartContext from "./cart-context";

const CartProvider = props => {
    /**
     * Purpose of CartProvider component is manage CartContext data
     * and provide this CartContext data (state) to all components that want it
     */

    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;