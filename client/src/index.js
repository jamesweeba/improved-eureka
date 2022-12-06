import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'reactjs-popup/dist/index.css';
import {Auth0Provider} from '@auth0/auth0-react';
import Start from './start';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-gwg4aotp.us.auth0.com"
    clientId="QccfUa3lEEl4yEGOgC4ncstd1r2QL49e"
    redirectUri={window.location.origin}
    >
      <Start/>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

