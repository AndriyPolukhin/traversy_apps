import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from "@material-ui/core";

import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import Form from "./Form";

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflow: "auto"
  }
});

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises,
    category,
    editMode,
    onEdit,
    onSelect,
    exercise,
    exercise: {
      id,
      title = "Welcome!",
      description = "Please select an exercise from the list on the left"
    },
    onDelete,
    onSelectEdit
  }) => (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  component="h2"
                  variant="h5"
                  color="secondary"
                  style={{
                    textTransform: "capitalize"
                  }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          onClick={() => onSelectEdit(id)}
                        >
                          <EditOutlined />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={() => onDelete(id)}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Paper className={classes.Paper}>
          <Typography variable="display1" gutterBottom color="secondary">
            {title}
          </Typography>
          {editMode ? (
            <Form
              key={id}
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          ) : (
            <Typography variant="subtitle1">{description}</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
);
