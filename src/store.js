// React & Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import app from './components/App/store/reducers';

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

const rootReducer = combineReducers({
  app,
  form: reduxFormReducer,
});

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares)),
);
