import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./responsive.scss";
import "./grid.scss";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
