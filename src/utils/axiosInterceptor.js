import axios from 'axios';
import * as appThunks from '../components/App/store/thunks';

export default () => dispatch => {
  axios.interceptors.response.use(
    response => response,
    error => {
        console.log(error);
      if (error && error.response && error.response.data) {
        dispatch(appThunks.showSnackbar(error.response.data, 'error'));
      } else {
        dispatch(appThunks.showSnackbar('Erro interno', 'error'));
      }

      return Promise.reject(error);
    },
  );
};
