// Axios
import axios from 'axios';

// Base URL
import BASE_URL from '../../../utils/url';

export const getConfiguracao = idCamera =>
  axios.get(`${BASE_URL}/cameras/${idCamera}/configuracao`);

export const putConfiguracao = (idCamera, configuracao) =>
  axios.put(`${BASE_URL}/cameras/${idCamera}/configuracao`, configuracao);

export const postConfiguracaoConfirmacao = (idCamera, configuracao) =>
  axios.post(`${BASE_URL}/cameras/${idCamera}/configuracao/confirmacao`);
