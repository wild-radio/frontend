// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  withStyles,
  Button,
  Badge,
  Divider,
  IconButton,
  Popover as PopoverMU,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AddBox, Camera } from '@material-ui/icons';

// Utils
import badgeFormat from '../../utils/badgeFormat';

const styles = theme => ({
  popover: {
    marginTop: 14,
  },
  inner: {
    width: 320,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  novoSistema: {
    width: '100%',
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
  cameraIconButton: {
    width: 30,
    height: 30,
    color: theme.palette.common.black,
    padding: 'initial',
  },
  cameraIcon: {
    width: 28,
    height: 28,
  },
  cameraAtiva: { background: theme.palette.snackbar.success },
  cameraInativa: { background: theme.palette.snackbar.error },
  cameraSelecionada: {
    border: `1px solid ${theme.palette.common.black}`,
    color: theme.palette.common.white,
  },
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
        <Typography variant="caption">
          <strong>SELECIONAR CÂMERA</strong>
        </Typography>
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
  const { cameraSelecionada } = props;
  const cameraPrincipalSelecionada = cameraSelecionada.id === cameraPrincipal.id;
  const cameraAlternativaSelecionada = cameraSelecionada.id === cameraAlternativa.id;

  return (
    <div>
      <div className={props.classes.sistema}>
        <div className={props.classes.camera}>
          <Badge
            badgeContent={badgeFormat(cameraPrincipal.fotosNovas)}
            classes={{
              badge: `${props.classes.badge} ${!cameraPrincipal.fotosNovas &&
                props.classes.badgeHidden}`,
            }}>
            <Tooltip title={cameraPrincipalSelecionada ? 'Selecionada' : 'Selecionar'}>
              <IconButton
                className={`${props.classes.cameraIconButton} ${
                  props.classes[`camera${cameraPrincipal.ativa ? 'Ativa' : 'Inativa'}`]
                } ${cameraPrincipalSelecionada && props.classes.cameraSelecionada}`}
                onClick={() => props.appThunks.changeCamera(cameraPrincipal)}>
                <Camera className={props.classes.cameraIcon} />
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
            <Tooltip title={cameraAlternativaSelecionada ? 'Selecionada' : 'Selecionar'}>
              <IconButton
                className={`${props.classes.cameraIconButton} ${
                  props.classes[`camera${cameraAlternativa.ativa ? 'Ativa' : 'Inativa'}`]
                } ${cameraAlternativaSelecionada && props.classes.cameraSelecionada}`}
                onClick={() => props.appThunks.changeCamera(cameraAlternativa)}>
                <Camera className={props.classes.cameraIcon} />
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
  cameraSelecionada: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const Popover = props => {
  const anchorEl = document.getElementById('popover-button');

  return (
    <PopoverMU
      open={props.popover.open}
      onClose={props.appActions.closePopover}
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
        <div className={props.classes.sistemas}>
          <Header {...props} />
          {props.sistemas.map((sistema, index) => (
            <Sistema {...props} sistema={sistema} key={index} />
          ))}
        </div>
        <div>
          <Button
            className={props.classes.novoSistema}
            onClick={() => props.openSistemasRegister()}
            variant="contained"
            color="default">
            <AddBox className={props.classes.cameraIcon} />
            Novo sistema
          </Button>
        </div>
      </div>
    </PopoverMU>
  );
};

Popover.propTypes = {
  popover: PropTypes.object.isRequired,
  sistemas: PropTypes.array.isRequired,
  appActions: PropTypes.object.isRequired,
  appThunks: PropTypes.object.isRequired,
  openSistemasRegister: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popover);
