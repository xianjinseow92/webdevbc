import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // set up store for app

import "./index.css";
import App from "./App";
import store from "store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
