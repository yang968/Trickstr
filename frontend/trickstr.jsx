import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;

  // get bootstrapped user if currentUser is defined in window
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  <Root store={store} />

  ReactDOM.render(<h2>Wilkommen!</h2>, root);
})
