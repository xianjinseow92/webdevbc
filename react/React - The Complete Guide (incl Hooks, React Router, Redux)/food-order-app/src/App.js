import React, { useState } from "react";

// Components
import Header from "components/Layout/Header/Header";
import Meals from "components/Meals/Meals";
import Cart from "components/Cart/Cart";

function App() {
  
   // cart managed in App component because cart and 
   // header (where button to open cart exists) are on the same level
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=> {
    setCartIsShown(true);
    console.log("Cart is showing");
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("Cart is hidden");
  }

  return (
    <>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
