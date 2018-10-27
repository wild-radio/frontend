// Endpoints
import * as rest from './rest';

// Thunks & actions
import * as actions from './actions';
import * as appThunks from '../../../components/App/store/thunks';

export const getCatalogos = () => dispatch =>
  rest.getCatalogos().then(({ data }) => dispatch(actions.setCatalogos(data)));

export const postCatalogo = catalogo => dispatch =>
  rest
    .postCatalogo(catalogo)
    .then(() => dispatch(appThunks.showSnackbar('Catálogo cadastrado', 'success')));

export const putCatalogo = catalogo => dispatch =>
  rest
    .putCatalogo(catalogo)
    .then(() => dispatch(appThunks.showSnackbar('Catálogo editado', 'success')));

export const deleteCatalogo = idCatalogo => dispatch =>
  rest
    .deleteCatalogo(idCatalogo)
    .then(() => dispatch(appThunks.showSnackbar('Catálogo removido', 'success')));

export const getFotosCatalogo = idCatalogo => dispatch =>
  rest.getFotosCatalogo(idCatalogo).then(({ data }) => dispatch(actions.setFotosCatalogos(data)));

export const deleteFotoCatalogo = (idCatalogo, idFoto) => dispatch =>
  rest
    .deleteFotoCatalogo(idCatalogo, idFoto)
    .then(() => dispatch(appThunks.showSnackbar('Foto removida', 'success')));

export const transferirFotoCatalogo = (idCatalogoOrigem, idCatalogoDestino, idFoto) => dispatch =>
  rest
    .transferirFotoCatalogo(idCatalogoOrigem, idCatalogoDestino, idFoto)
    .then(() => dispatch(appThunks.showSnackbar('Foto transferida', 'success')));

export const transferirFotosCatalogo = (idCatalogoOrigem, idCatalogoDestino) => dispatch =>
  rest
    .transferirFotosCatalogo(idCatalogoOrigem, idCatalogoDestino)
    .then(() => dispatch(appThunks.showSnackbar('Fotos transferidas', 'success')));
