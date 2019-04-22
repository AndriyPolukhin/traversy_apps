import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  pallette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
