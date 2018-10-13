// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  AppBar as AppBarMU,
  Badge,
  Button,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Menu, Adjust } from '@material-ui/icons';

// Utils
import badgeFormat from '../../utils/badgeFormat';

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
  badge: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 'bold',
  },
  badgeHidden: { display: 'none' },
});

const AppBar = props => {
  const { classes, sistemas } = props;

  const totalFotosNovas = badgeFormat(
    sistemas.reduce(
      (acc, sistema) => acc + sistema.cameras[0].fotosNovas + sistema.cameras[1].fotosNovas,
      0,
    ),
  );

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
            <Badge
              badgeContent={totalFotosNovas}
              classes={{
                badge: `${props.classes.badge} ${!totalFotosNovas && props.classes.badgeHidden}`,
              }}>
              <Button
                variant="extendedFab"
                className={classes.cameraSelectButton}
                onClick={props.appActions.openPopover}
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
            </Badge>
          </Tooltip>
        </Toolbar>
      </AppBarMU>
    </div>
  );
};

AppBar.propTypes = {
  appActions: PropTypes.object.isRequired,
  cameraSelecionada: PropTypes.object.isRequired,
  sistemas: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
