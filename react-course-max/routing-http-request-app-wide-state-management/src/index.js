import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter now aware of this App and make sure it watches our app's url
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
