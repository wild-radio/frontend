/**
 * TODOs:
 *  - Implementar troca de câmera selecionada
 *  - Pensar num modo de mostrar a câmera selecionada no ícone (border?)
 */
// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Popover as PopoverMU,
  Badge,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Camera } from '@material-ui/icons';

const styles = theme => ({
  popover: {
    marginTop: 14,
  },
  inner: {
    width: 320,
    minHeight: 300,
  },
  sistema: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 8px',
  },
  header: {
    background: theme.palette.common.lightGray,
    padding: 8,
  },
  camera: { flexGrow: 0, flexShrink: 1 },
  cameraIcon: { width: 30, height: 30, color: theme.palette.common.white, padding: 'initial' },
  cameraAtiva: { background: theme.palette.snackbar.success },
  cameraInativa: { background: theme.palette.snackbar.error },
  identificacao: { padding: '0 8px', textAlign: 'center' },
  badge: {
    background: theme.palette.snackbar.info,
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.white}`,
    fontWeight: 'bold',
  },
  badgeAlternativa: { top: -11, left: -11 },
  badgeHidden: { display: 'none' },
});

const Header = props => (
  <div>
    <div className={`${props.classes.sistema} ${props.classes.header}`}>
      <div className={props.classes.camera}>
        <Typography variant="caption">principal</Typography>
      </div>
      <div className={props.classes.identificacao}>
        <Typography variant="caption">SELECIONAR CÂMERA</Typography>
      </div>
      <div className={props.classes.camera}>
        <Typography variant="caption">alternativa</Typography>
      </div>
    </div>
    <Divider />
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Sistema = props => {
  const cameras = props.sistema.cameras;
  const cameraPrincipal = cameras.find(camera => !!camera.principal);
  const cameraAlternativa = cameras.find(camera => !camera.principal);

  return (
    <div>
      <div className={props.classes.sistema}>
        <div className={props.classes.camera}>
          <Badge badgeContent={cameraPrincipal.fotosNovas} classes={{ badge: props.classes.badge }}>
            <Tooltip title="Selecionar">
              <IconButton
                className={`${props.classes.cameraIcon} ${
                  props.classes[`camera${cameraPrincipal.ativa ? 'Ativa' : 'Inativa'}`]
                }`}
                onClick={() => console.log('TODO: change camera')}>
                <Camera fontSize="small" />
              </IconButton>
            </Tooltip>
          </Badge>
        </div>
        <div className={props.classes.identificacao}>
          <Typography>{props.sistema.identificacao}</Typography>
          <Typography variant="caption">{props.sistema.numeroSerie}</Typography>
        </div>
        <div className={props.classes.camera}>
          <Badge
            badgeContent={cameraAlternativa.fotosNovas}
            classes={{
              badge: `${props.classes.badge} ${
                props.classes.badgeAlternativa
              } ${!cameraAlternativa.fotosNovas && props.classes.badgeHidden}`,
            }}>
            <Tooltip title="Selecionar">
              <IconButton
                className={`${props.classes.cameraIcon} ${
                  props.classes[`camera${cameraAlternativa.ativa ? 'Ativa' : 'Inativa'}`]
                }`}
                onClick={() => console.log('TODO: change camera')}>
                <Camera fontSize="small" />
              </IconButton>
            </Tooltip>
          </Badge>
        </div>
      </div>
      <Divider />
    </div>
  );
};

Sistema.propTypes = {
  sistema: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const Popover = props => {
  const anchorEl = document.getElementById('popover-button');

  return (
    <PopoverMU
      open={props.popover.open}
      onClose={props.appActions.togglePopover}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      className={props.classes.popover}>
      <div className={props.classes.inner}>
        <Header {...props} />
        {props.sistemas.map((sistema, index) => (
          <Sistema {...props} sistema={sistema} key={index} />
        ))}
      </div>
    </PopoverMU>
  );
};

Popover.propTypes = {
  popover: PropTypes.object.isRequired,
  sistemas: PropTypes.array.isRequired,
  appActions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popover);
