import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'novasCapturas/fotos/set':
      return Object.assign({}, state, {
        ...state,
        fotos: action.payload,
      });
    default:
      return state;
  }
};
