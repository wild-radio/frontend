import { push } from 'connected-react-router';

export const inicio = () => dispatch => dispatch(push('/'));
export const novasCapturas = () => dispatch => dispatch(push('/novas-capturas'));
export const catalogos = () => dispatch => dispatch(push('/catalogos'));
export const catalogo = id => dispatch => dispatch(push(`/catalogos/${id}`));
export const configuracoes = () => dispatch => dispatch(push('/configuracoes'));
