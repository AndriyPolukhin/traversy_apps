import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Success
              </Typography>
            </Toolbar>
          </AppBar>
          <h1>Thank You For Your Submission</h1>
          <p>You will get a email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
