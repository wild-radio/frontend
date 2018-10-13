// Axios
import axios from 'axios';

// Base URL
import { BACK } from '../../../utils/url';

export const getConfiguracao = idCamera => axios.get(`${BACK}/cameras/${idCamera}/configuracao`);

export const putConfiguracao = (idCamera, configuracao) =>
  axios.put(`${BACK}/cameras/${idCamera}/configuracao`, configuracao);

export const postConfiguracaoConfirmacao = (idCamera, configuracao) =>
  axios.post(`${BACK}/cameras/${idCamera}/configuracao/confirmacao`, configuracao);
