import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
