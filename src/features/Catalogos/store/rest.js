// Axios
import axios from 'axios';

// Base URL
import BASE_URL from '../../../utils/url';

export const getCatalogos = () => axios.get(`${BASE_URL}/catalogos`);

export const postCatalogo = catalogo => axios.post(`${BASE_URL}/catalogos`, catalogo);

export const putCatalogo = catalogo => axios.put(`${BASE_URL}/catalogos/${catalogo.id}`, catalogo);

export const deleteCatalogo = idCatalogo => axios.delete(`${BASE_URL}/catalogos/${idCatalogo}`);

export const getFotosCatalogo = idCatalogo =>
  axios.get(`${BASE_URL}/catalogos/${idCatalogo}/fotos`);

export const deleteFotoCatalogo = (idCatalogo, idFoto) =>
  axios.delete(`${BASE_URL}/catalogos/${idCatalogo}/fotos/${idFoto}`);

export const transferirFotosCatalogo = (idCatalogoOrigem, idCatalogoDestino) =>
  axios.put(`${BASE_URL}/catalogos/${idCatalogoOrigem}/fotos/transferir-para/${idCatalogoDestino}`);
