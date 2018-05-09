import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { loadeState, saveState } from './localstorage';

const history = createHistory();
const middleware = routerMiddleware(history);
//const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const loggerMiddleware = createLogger();
const persitantState = loadeState();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    // persitantState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, middleware, loggerMiddleware)
    )
  );
  store.subscribe(() => {
    //saveState();
  });
  return store;
}
