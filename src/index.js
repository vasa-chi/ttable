import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import theme from "./toolbox/theme";
import AppShell from "./AppShell";
import "./toolbox/theme.css";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <AppShell />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
