import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReactPerformance from 'react-performance';

const history = createHistory();
const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger();
const performance = ReactPerformance.createNotifier();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, middleware, loggerMiddleware),
      performance
    )
  );
  return store;
}
