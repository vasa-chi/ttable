import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import BrowserRouter from "react-router/BrowserRouter";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "./App";
import "./index.css";

injectTapEventPlugin();

ReactDOM.render(
  (
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  ),
  document.getElementById("root")
);
