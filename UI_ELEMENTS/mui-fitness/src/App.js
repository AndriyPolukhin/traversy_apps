import React, { Component } from 'react';

import { Paper, Typography, TextField, Button } from '@material-ui/core';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  paletter: {
    primary: {
      light: orange[200],
      main: '#FB8C00',
      dark: '#EF6C00',
      contrastText: 'rgb(0,0,0)'
    }
  },
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
});

class App extends Component {
  state = {
    exercises: [
      { id: 1, title: 'Bench Press' },
      { id: 2, title: 'Deadlift' },
      { id: 3, title: 'Squats' }
    ],
    title: ''
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleCreate = e => {
    e.preventDefault();

    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }));
    }
  };

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  render() {
    const { title, exercises } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <Paper classNames={classes.root}>
          <form onSubmit={this.handleCreate}>
            <TextField
              name="title"
              label="Exercise"
              value={title}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button type="submit" color="primary" variant="raised">
              Create
            </Button>
          </form>
          <List>
            {exercises.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    color="primary"
                    onClick={() => this.handleDelete(id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(theme)(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
