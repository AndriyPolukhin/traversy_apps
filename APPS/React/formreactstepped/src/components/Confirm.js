import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Process the form here( in order to send to back-end api)
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Confirm User Data
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
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
            Confirm and Continue
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
