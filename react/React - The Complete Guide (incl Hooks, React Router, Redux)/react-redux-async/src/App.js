import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

import { useEffect } from "react";
import store from "store/index";

function App() {

  // For logging purposes
  useEffect(() => {
    store.subscribe(_ => {
      console.log(store.getState());
    })
    return () => {
      console.log("CLEANUP");
    }
  }, []);

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
