import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField
            helperText="Enter your occupation"
            label="Occupation"
            fullWidth
            margin="normal"
            style={{ margin: 8 }}
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            helperText="Enter your city"
            label="city"
            fullWidth
            margin="normal"
            style={{ margin: 8 }}
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            helperText="Enter your Bio"
            label="Bio"
            fullWidth
            margin="normal"
            style={{ margin: 8 }}
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <Button
            color="default"
            variant="contained"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
