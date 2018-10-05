// Axios
import axios from 'axios';

// Base URL
import BASE_URL from '../../../utils/url';

export const getFotos = idCamera => axios.get(`${BASE_URL}/cameras/${idCamera}/fotos`);

export const deleteFoto = (idCamera, idFoto) =>
  axios.delete(`${BASE_URL}/cameras/${idCamera}/fotos/${idFoto}`);

export const putCatalogoFoto = (idCatalogo, idFoto) =>
  axios.put(`${BASE_URL}/catalogos/${idCatalogo}/fotos/${idFoto}`);
