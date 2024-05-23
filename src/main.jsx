import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./constant.css"
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import { Offline, Online } from "react-detect-offline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Online>
        <App />
      </Online>
      <Offline>
        <h1>Net Chla gya</h1>
      </Offline>
    </Provider>
  </React.StrictMode>
);
