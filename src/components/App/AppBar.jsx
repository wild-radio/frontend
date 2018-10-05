// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  AppBar as AppBarMU,
  Button,
  Toolbar,
  Tooltip,
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
  cameraSelectButton: {
    padding: 0,
    height: 36,
    minWidth: 0,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  cameraSelectText: { padding: '0 8px 0 16px', textAlign: 'center' },
  extendedIcon: {
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
          <Tooltip title="Menu">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={props.appActions.openDrawer}>
              <Menu />
            </IconButton>
          </Tooltip>
          <Typography variant="title" color="inherit" className={classes.grow}>
            WildRadio
          </Typography>
          <Tooltip title="Selecionar câmera">
            <Button
              variant="extendedFab"
              className={classes.cameraSelectButton}
              onClick={props.appActions.togglePopover}
              id="popover-button">
              {props.cameraSelecionada.id && (
                <div className={classes.cameraSelectText}>
                  <Typography>{props.cameraSelecionada.identificacao.sistema}</Typography>
                  <Typography variant="caption">
                    {props.cameraSelecionada.identificacao.principal}
                  </Typography>
                </div>
              )}
              <Adjust className={classes.extendedIcon} />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBarMU>
    </div>
  );
};

AppBar.propTypes = {
  appActions: PropTypes.object.isRequired,
  cameraSelecionada: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
