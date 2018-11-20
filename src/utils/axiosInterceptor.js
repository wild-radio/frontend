import axios from 'axios';
import * as appThunks from '../components/App/store/thunks';

export default () => dispatch => {
    axios.interceptors.request.use(config => {
        console.log('config', config);
    }, error => {
        debugger;
        console.log('error', error);
    });

  axios.interceptors.response.use(
    response => response,
    error => {
        debugger;
      if (error && error.response && error.response.data) {
        dispatch(appThunks.showSnackbar(error.response.data, 'error'));
      } else {
        dispatch(appThunks.showSnackbar('Erro interno', 'error'));
      }

      return Promise.reject(error);
    },
  );
};
