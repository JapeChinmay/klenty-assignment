import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyle } from "./Components/styles/Gstyle";
import { OverAllContextProvider } from "./Components/context/OverAllContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <OverAllContextProvider>
      <App />
    </OverAllContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
