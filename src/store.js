// React & Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

// Router
import { createBrowserHistory } from 'history';

// Reducers da aplicação
import app from './components/App/store/reducers';
import novasCapturas from './features/NovasCapturas/store/reducers';
import catalogos from './features/Catalogos/store/reducers';
import configuracoes from './features/Configuracoes/store/reducers';

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

const rootReducer = combineReducers({
  app,
  novasCapturas,
  catalogos,
  configuracoes,
  form: reduxFormReducer,
});

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares)),
);
