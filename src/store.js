import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createHistory from 'history/createBrowserHistory';
import app from './components/App/store/reducers';

const middlewares = [
  // thunk,
  // routerMiddleware(history),
  // sagaMiddleware
];

const rootReducer = combineReducers({
  // form: reduxFormReducer,
  // router: routerReducer,
  app,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
