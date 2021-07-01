import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "assets/images/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  const { showCart, // showCart function. passed down from App
   } = props; 

  return (
    <>
      <header className={classes.header}>
          <h1>Meals!</h1>
          <HeaderCartButton onClick={showCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
