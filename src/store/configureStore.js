
import {createStore, applyMiddleware, compose} from 'redux';  
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer'

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export default function configureStore() {  
  return createStore(
    rootReducer,
    composeEnhanser(applyMiddleware(thunk))
  );
}