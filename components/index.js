/* index.js */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../store';

//import css
require('../styles/main.css');

//import devTools
// TODO: remove before prod
import DevTools from '../containers/DevTools';

//init store
const store = configureStore();


let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  rootElement
);