/* eslint-disable no-console */



import 'babel-polyfill';
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';


// ReactDOM.render( <App/> , document.getElementById('root'));


const store = configureStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);





