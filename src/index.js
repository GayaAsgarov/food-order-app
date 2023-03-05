import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/sass/style.css";
import store from "./stores";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
