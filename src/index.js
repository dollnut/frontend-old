import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from './react-auth0-wrapper';
import config from './auth_config.json'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: blue
  },
  spacing: 5
});

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Auth0Provider>
   
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
