import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Contexts
import { FavoritesContextProvider } from "./store/FavoritesContext";

ReactDOM.render(
  // Provide all components with data from favorites context
  <FavoritesContextProvider>
    {/* // BrowserRouter now aware of this App and make sure it watches our app's
    url */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
