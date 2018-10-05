import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'catalogos/list/set':
      return Object.assign({}, state, {
        ...state,
        list: action.payload,
      });
    case 'catalogos/fotos/set':
      return Object.assign({}, state, {
        ...state,
        fotos: action.payload,
      });
    default:
      return state;
  }
};
