import { push } from 'connected-react-router';

export const home = () => dispatch => dispatch(push('/'));
export const novasCapturas = () => dispatch => dispatch(push('/novas-capturas'));
export const catalogos = () => dispatch => dispatch(push('/catalogos'));
export const configuracoes = () => dispatch => dispatch(push('/configuracoes'));
