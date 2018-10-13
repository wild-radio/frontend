// Axios
import axios from 'axios';

// Base URL
import { BACK } from '../../../utils/url';

export const getCatalogos = () => axios.get(`${BACK}/catalogos`);

export const postCatalogo = catalogo => axios.post(`${BACK}/catalogos`, catalogo);

export const putCatalogo = catalogo => axios.put(`${BACK}/catalogos/${catalogo.id}`, catalogo);

export const deleteCatalogo = idCatalogo => axios.delete(`${BACK}/catalogos/${idCatalogo}`);

export const getFotosCatalogo = idCatalogo => axios.get(`${BACK}/catalogos/${idCatalogo}/fotos`);

export const deleteFotoCatalogo = (idCatalogo, idFoto) =>
  axios.delete(`${BACK}/catalogos/${idCatalogo}/fotos/${idFoto}`);

export const transferirFotosCatalogo = (idCatalogoOrigem, idCatalogoDestino) =>
  axios.put(`${BACK}/catalogos/${idCatalogoOrigem}/fotos/transferir-para/${idCatalogoDestino}`);
