import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{ BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const app = (

    <BrowserRouter>
     <Home/>
    </BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
