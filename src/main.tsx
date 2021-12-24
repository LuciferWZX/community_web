import React from "react";
import ReactDOM from "react-dom";
import "./global.less";
import App from "./App";
import dva from "@utils/dva";
import models from "./models";
import { Provider } from "react-redux";
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
