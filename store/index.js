/* Virtual Card Redux Store */

import virtualCardReducer from '../reducers/index';
import {createStore, compose} from 'redux';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);


export default function configureStore(initialState){
  const store = finalCreateStore(virtualCardReducer, initialState);

   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}