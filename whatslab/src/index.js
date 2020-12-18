import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  color: #F1F6F8;
  background-color: #291F1E;
  font-family: 'Montserrat', sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
