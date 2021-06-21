import React, { useState, useEffect } from 'react';
import { sha256 as sha256Cryp } from "js-sha256";
import SHA256 from "crypto-js/sha256";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (userIsLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const hashedNum = SHA256("987912312").toString();
  const hashedNum2 = sha256Cryp("987912312");
  const hashedEmail = SHA256("xianjinseow92@gmail.com").toString();
  const hashedEmail2 = sha256Cryp("xianjinseow92@gmail.com");

  console.log("cryptojs: ", hashedNum);
  console.log(hashedNum2);
  console.log("cryptojs: ", hashedEmail);
  console.log(hashedEmail2);



  

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
