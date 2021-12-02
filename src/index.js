import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ContainerLogic from "./components/Container/ContainerLogic";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ContainerLogic />
    </Router>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    height: fit-content;
    padding-bottom: 40px;
    background: rgb(4,92,155);
    background: linear-gradient(90deg, rgba(4,92,155,1) 0%, rgba(248,156,26,1) 70%, rgba(204,219,41,1) 100%);
  }
`;

reactDom.render(<App />, document.querySelector("#root"));
