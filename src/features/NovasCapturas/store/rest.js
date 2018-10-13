// Axios
import axios from 'axios';

// Base URL
import { BACK } from '../../../utils/url';

export const getFotos = idCamera => axios.get(`${BACK}/cameras/${idCamera}/fotos`);

export const deleteFoto = (idCamera, idFoto) =>
  axios.delete(`${BACK}/cameras/${idCamera}/fotos/${idFoto}`);

export const putCatalogoFoto = (idCatalogo, idFoto) =>
  axios.put(`${BACK}/catalogos/${idCatalogo}/fotos/${idFoto}`);
