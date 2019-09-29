import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import jwt_decode from 'jwt-decode';


import { logout } from './actions/session_actions';
import { setAuthToken } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  const io = require('socket.io-client');
  const port = process.env.PORT || 5000;

  // let walks = io();


  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser }};
    // socket: walks 

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  // testing codes start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing codes end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});