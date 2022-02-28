import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./core/router";
import "./core/theme/main.css";

const App: React.FC = () => {
  return <Router />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
