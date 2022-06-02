import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter as Router, } from 'react-router-dom';

ReactDOM.render(
  <Router>
  <Auth0Provider domain='sanjaybisht.us.auth0.com' clientId='CcmDqB7QrwrbsoOJXbiBjWe9zUggH7LA' redirectUri={window.location.origin}>
    <App/>
  </Auth0Provider>
  </Router>,
  document.getElementById('root')
);

