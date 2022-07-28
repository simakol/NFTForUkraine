import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";

import "./index.sass";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
