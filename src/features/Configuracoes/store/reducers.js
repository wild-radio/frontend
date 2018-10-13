import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'configuracoes/camera/set':
      return Object.assign({}, state, {
        ...state,
        camera: action.payload,
      });
    case 'configuracoes/camera/clear':
      return Object.assign({}, state, {
        ...state,
        camera: initialState.camera,
      });
    default:
      return state;
  }
};
