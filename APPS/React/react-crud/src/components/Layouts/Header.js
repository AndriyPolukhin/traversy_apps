import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Dialog from "../Exercises/Dialog";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flex: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes, muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" className={classes.flex}>
        Exercise Database
      </Typography>
      <Dialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
));
