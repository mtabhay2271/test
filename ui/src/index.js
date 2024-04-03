import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

// import "./services";

import { ConfigProvider } from "./contexts/ConfigContext";

import "./index.scss";
import App from "./App";

ReactDOM.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>
,
  document.getElementById("root")
);

