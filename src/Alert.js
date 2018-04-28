import React from "react";
import { render } from "react-dom";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Home";

const options = {
  position: 'center right',
  timeout: 2500,
  offset: '30px',
  transition: 'scale'
}

const Alert = () => (
  <Provider template={AlertTemplate} {...options}>
    <Home />
  </Provider>
);

render(<Alert />, document.getElementById("welcome"));