/* eslint-disable no-console */


import 'babel-polyfill';
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';


// ReactDOM.render( <App/> , document.getElementById('root'));

render (
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);





