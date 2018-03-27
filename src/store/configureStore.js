
import {createStore, applyMiddleware, compose} from 'redux';  
import thunk from 'redux-thunk';
import initialState from './../state/initialState'
import rootReducer from './../reducers/rootReducer'
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const loggerMiddleware = createLogger()


export default function configureStore() {  
  return createStore(
    rootReducer,
    composeEnhanser(applyMiddleware(thunkMiddleware,
      loggerMiddleware))
  );
}