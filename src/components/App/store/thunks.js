// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';
import * as routesThunks from '../../Routes/store/thunks';

export const hideSnackbar = (event, reason) => dispatch => {
  if (reason === 'clickaway') return;
  dispatch(actions.hideSnackbar());
};

export const showSnackbar = (message = '', type) => dispatch => {
  dispatch(actions.hideSnackbar());
  setTimeout(() => {
    dispatch(actions.showSnackbar(message, type));
  }, 500);
};

export const changeCamera = camera => (dispatch, getState) => {
  const {
    app: { sistemas },
  } = getState();

  const sistema = sistemas.find(sistema => sistema.id === camera.idSistema);
  const cameraIdentificacao = {
    ...camera,
    identificacao: {
      sistema: sistema.identificacao,
      principal: camera.principal ? 'principal' : 'alternativa',
    },
  };

  dispatch(actions.closePopover());
  dispatch(actions.changeCamera(cameraIdentificacao));
  dispatch(routesThunks.inicio());
  dispatch(
    showSnackbar(
      `Câmera ${cameraIdentificacao.identificacao.principal} do sistema ${
        cameraIdentificacao.identificacao.sistema
      } selecionada`,
      'info',
    ),
  );
};

export const loadSistemas = () => dispatch => {
  return rest.getSistemas().then(({ data }) => dispatch(actions.setSistemas(data)));
};
