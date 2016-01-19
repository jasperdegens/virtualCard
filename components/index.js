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
var exampleState = {
  coverImages: [
    {
      title: "Example Image",
      description: 'Example Description',
      imageURI: "http://jasperdegens.com/holidayCards/images/ocean_stylised.png"
    }
  ],
  letterText: {
    salutation: "Hello User,",
    body: "This is an example of what your card could look like! Fill out the fields in the option menu to the right and design your card! More features are on the way, so keep checking back.",
    signature: "Regards, Jasper"
  }
};
const store = configureStore(exampleState);


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