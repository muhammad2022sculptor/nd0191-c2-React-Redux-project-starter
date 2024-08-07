import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} dispatch={store.dispatch}>
    <Router>
      <App />
    </Router>
  </Provider>
);
