import React from "react";
import ReactDOM from "react-dom";

import { App as AppWithoutContext } from "./context/without-context";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithoutContext />, rootElement);
