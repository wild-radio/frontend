// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';
import * as appThunks from '../../../components/App/store/thunks';

export const getFotos = () => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest.getFotos(cameraSelecionada.id).then(({ data }) => dispatch(actions.setFotos(data)));
  }
};

export const deleteFoto = idFoto => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest
      .deleteFoto(cameraSelecionada.id, idFoto)
      .then(() => dispatch(appThunks.showSnackbar('Captura descartada', 'success')));
  }
};

export const putCatalogoFoto = (idCatalogo, idFoto) => dispatch =>
  rest
    .putCatalogoFoto(idCatalogo, idFoto)
    .then(() => dispatch(appThunks.showSnackbar('Captura catalogada', 'success')));
