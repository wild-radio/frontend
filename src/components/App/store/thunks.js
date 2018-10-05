// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';
import * as routesThunks from '../../Routes/store/thunks';

const SNACKBAR_TIMEOUT = 4000;

export const hideSnackbar = () => dispatch => {
  dispatch(actions.hideSnackbar());
};

export const showSnackbar = (message = '', type) => dispatch => {
  dispatch(actions.showSnackbar(message, type));
  setTimeout(() => dispatch(actions.hideSnackbar()), SNACKBAR_TIMEOUT);
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

  dispatch(actions.togglePopover());
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
