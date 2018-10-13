import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'app/drawer/open':
      return Object.assign({}, state, {
        ...state,
        drawer: {
          open: true,
        },
      });

    case 'app/drawer/close':
      return Object.assign({}, state, {
        ...state,
        drawer: {
          open: false,
        },
      });

    case 'app/popover/open':
      return Object.assign({}, state, {
        ...state,
        popover: {
          open: true,
        },
      });

    case 'app/popover/close':
      return Object.assign({}, state, {
        ...state,
        popover: {
          open: false,
        },
      });

    case 'app/snackbar/hide':
      return Object.assign({}, state, {
        ...state,
        snackbar: { ...state.snackbar, open: false },
      });

    case 'app/snackbar/show':
      return Object.assign({}, state, {
        ...state,
        snackbar: { ...action.payload, open: true },
      });

    case 'app/camera/change':
      window.localStorage.setItem('cameraSelecionada', JSON.stringify(action.payload));
      return Object.assign({}, state, {
        ...state,
        cameraSelecionada: action.payload,
      });

    case 'app/sistemas/set':
      return Object.assign({}, state, {
        ...state,
        sistemas: action.payload,
      });

    default:
      return state;
  }
};
