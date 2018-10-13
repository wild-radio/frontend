import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'configuracoes/camera/set':
      return Object.assign({}, state, {
        ...state,
        camera: action.payload,
      });
    default:
      return state;
  }
};
