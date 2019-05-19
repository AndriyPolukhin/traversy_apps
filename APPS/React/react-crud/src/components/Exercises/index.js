import React, { Fragment } from 'react';
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
} from '@material-ui/core';

import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import Form from './Form';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 10px)',
      marginTop: 5
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px  - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px  - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
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
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left'
    },
    onDelete,
    onSelectEdit
  }) => (
    <Grid container className={classes.container}>
      <Grid item sm={6} xs={12} className={classes.item}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  component="h2"
                  variant="h5"
                  color="secondary"
                  style={{
                    textTransform: 'capitalize'
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
      <Grid item sm={6} xs={12} className={classes.item}>
        <Paper className={classes.paper}>
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
