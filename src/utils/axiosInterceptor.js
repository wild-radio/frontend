import axios from 'axios';
import * as appThunks from '../components/App/store/thunks';

export default () => dispatch => {
  axios.interceptors.response.use(
    response => response,
    error => {
      if (
        error.message.includes('Network Error') ||
        error.response === undefined ||
        error.response.status === 404 ||
        error.response.status === 400
      ) {
        dispatch(appThunks.showSnackbar('Erro na chamada', 'error'));
      }

      return Promise.reject(error);
    },
  );
};
