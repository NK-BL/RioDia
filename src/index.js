import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./index.css";
import store from "./state/store/store.js";

const target = document.querySelector("#root");


render(
  <Provider store={store}>
    {/* <Router location={history.location} navigator={history} > */}
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
    {/* </Router> */}
  </Provider>,
  target
);
