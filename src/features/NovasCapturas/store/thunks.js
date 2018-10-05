// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';

export const getFotos = () => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest.getFotos(cameraSelecionada.id).then(({ data }) => dispatch(actions.setFotos(data)));
  }
};
