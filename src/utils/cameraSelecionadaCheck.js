import { store } from '../store';
import * as appThunks from '../components/App/store/thunks';
import * as routesThunks from '../components/Routes/store/thunks';

export default () => {
  const { dispatch, getState } = store;

  const { cameraSelecionada } = getState().app;

  if (!cameraSelecionada.id) {
    dispatch(routesThunks.inicio());
    dispatch(appThunks.showSnackbar('Selecione uma câmera', 'error'));
  }
};
