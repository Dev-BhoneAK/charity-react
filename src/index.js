import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/main.scss";
import "animate.css/animate.min.css";
import "./css/animated-counter-prograssbar.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import reducers from "./reducers";
import App from "./App";
import { HashRouter } from "react-router-dom";

const store = createStore(reducers, middleware);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter basename="/charity-react">
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
