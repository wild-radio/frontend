// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';
import * as appThunks from '../../../components/App/store/thunks';

export const getConfiguracao = () => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest
      .getConfiguracao(cameraSelecionada.id)
      .then(({ data }) => dispatch(actions.setConfiguracao(data)));
  }
};

export const putConfiguracao = configuracao => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest.putConfiguracao(cameraSelecionada.id, configuracao).then(({ data }) => {
      dispatch(actions.setConfiguracao(data));
      dispatch(appThunks.showSnackbar('Configurações alteradas', 'success'));
    });
  }
};

export const postConfiguracaoConfirmacao = configuracao => (dispatch, getState) => {
  const { cameraSelecionada } = getState().app;

  if (cameraSelecionada.id) {
    return rest
      .postConfiguracaoConfirmacao(cameraSelecionada.id, configuracao)
      .then(({ data }) =>
        dispatch(appThunks.showSnackbar('Confirmação requisitada, aguarde resposta...', 'info')),
      );
  }
};
