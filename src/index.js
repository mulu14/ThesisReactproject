import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'; 
import{ BrowserRouter} from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory()
const store = configureStore(); 
console.log(store.getState())

const app = (
  <Provider store= {store}>
    <Router  history={history}>
     <App/>
    </Router>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
