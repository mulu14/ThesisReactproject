import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'; 
import{ BrowserRouter} from 'react-router-dom'
import App from './components/App';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const store = configureStore(); 

const app = (
  <Provider store= {store}>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
