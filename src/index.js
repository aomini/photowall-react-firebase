import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/style.css";

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";

import Thunk from "redux-thunk";
import { database } from "./database/config";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(Thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
