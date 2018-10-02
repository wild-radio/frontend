import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, AppBar as AppBarMU, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu, Adjust } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    height: 36,
    backgroundColor: 'white',
  },
  extendedIcon: {
    marginRight: 12,
    marginLeft: -12,
    width: 36,
    height: 36,
  },
};

const AppBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarMU position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            WildRadio
          </Typography>
          <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
            <Adjust className={classes.extendedIcon} />
            Câmera
          </Button>
        </Toolbar>
      </AppBarMU>
    </div>
  );
};

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
