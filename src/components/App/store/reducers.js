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
    default:
      return state;
  }
};