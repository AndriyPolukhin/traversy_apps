import React, { Component } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;

      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          };
    }

    componentWillReceiveProps({ exercise }) {
      this.setState({
        ...exercise
      });
    }

    handleChange = name => ({ target: { value } }) =>
      this.setState({
        [name]: value
      });

    handleSubmit = () => {
      // @todo: validate the form

      this.props.onSubmit({
        id: this.state.title.toLowerCase().replace("/ /g", "-"),
        ...this.state
      });

      this.setState(this.getInitState());
    };

    render() {
      const { title, description, muscles } = this.state;
      const { classes, exercise, muscles: categories } = this.props;
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />

          <FormControl>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select
              value={muscles}
              onChange={this.handleChange("muscles")}
              className={classes.FormControl}
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            multiline
            rows="4"
            className={classes.FormControl}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            {exercise ? "Edit" : "Create"}
          </Button>
        </form>
      );
    }
  }
);
