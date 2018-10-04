// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Button,
  AppBar as AppBarMU,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Menu, Adjust } from '@material-ui/icons';

const styles = theme => ({
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
    backgroundColor: theme.palette.common.white,
  },
  extendedIcon: {
    marginRight: 12,
    marginLeft: -12,
    width: 36,
    height: 36,
  },
});

const AppBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarMU position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={props.appActions.openDrawer}>
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            WildRadio
          </Typography>
          <Button
            variant="extendedFab"
            className={classes.button}
            onClick={props.appActions.togglePopover}
            id="popover-button">
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
  appActions: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
