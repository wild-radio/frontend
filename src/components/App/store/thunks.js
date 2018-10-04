// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';

const SNACKBAR_TIMEOUT = 4000;

export const hideSnackbar = () => dispatch => {
  dispatch(actions.hideSnackbar());
};

export const showSnackbar = (message = '', type) => dispatch => {
  dispatch(actions.showSnackbar(message, type));
  setTimeout(() => dispatch(hideSnackbar()), SNACKBAR_TIMEOUT);
};

export const loadSistemas = () => dispatch => {
  return rest.getSistemas().then(({ data }) => dispatch(actions.setSistemas(data)));
};
