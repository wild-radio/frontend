// React & Redux
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles, Button, Typography } from '@material-ui/core';
import { Adjust, AddAPhoto, PhotoAlbum, Settings } from '@material-ui/icons';

// Componentes internos
import Frame from '../../components/Frame/Frame';
import Subtitle from '../../components/Subtitle/Subtitle';

const styles = theme => ({
  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  innerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'space-between',
  },
  button: {
    minWidth: 200,
    minHeight: 200,
    margin: 16,
  },
  icon: {
    color: theme.palette.common.black,
    width: 32,
    height: 32,
  },
});

const Inicio = props => (
  <Frame enableBackButton={false} title="Início">
    <Subtitle>
      Bem vindo ao WildRadio. Navegue utilizando os botões abaixo ou o menu lateral.
    </Subtitle>
    <div className={props.classes.inner}>
      {props.cameraSelecionada.id ? (
        <Button
          variant="contained"
          className={props.classes.button}
          onClick={props.routesThunks.novasCapturas}>
          <div className={props.classes.innerButton}>
            <Typography variant="h5">Novas capturas</Typography>
            <AddAPhoto className={props.classes.icon} />
          </div>
        </Button>
      ) : (
        <div />
      )}
      <Button
        variant="contained"
        className={props.classes.button}
        onClick={props.routesThunks.catalogos}>
        <div className={props.classes.innerButton}>
          <Typography variant="h5">Catálogos</Typography>
          <PhotoAlbum className={props.classes.icon} />
        </div>
      </Button>
      <Button
        variant="contained"
        className={props.classes.button}
        onClick={props.appActions.openPopover}>
        <div className={props.classes.innerButton}>
          <Typography variant="h5">
            {props.cameraSelecionada.id ? 'Trocar câmera' : 'Selecionar câmera'}
          </Typography>
          <Adjust className={props.classes.icon} />
        </div>
      </Button>
      {props.cameraSelecionada.id ? (
        <Button
          variant="contained"
          className={props.classes.button}
          onClick={props.routesThunks.configuracoes}>
          <div className={props.classes.innerButton}>
            <Typography variant="h5">Configurações da câmera</Typography>
            <Settings className={props.classes.icon} />
          </div>
        </Button>
      ) : (
        <div />
      )}
    </div>
  </Frame>
);

Inicio.propTypes = {
  appActions: PropTypes.object.isRequired,
  routesThunks: PropTypes.object.isRequired,
  cameraSelecionada: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inicio);
