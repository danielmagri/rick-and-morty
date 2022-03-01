import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { Router } from "./core/router";
import { theme } from "./core/theme";
import { store } from "./core/context";
import "./core/theme/main.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
