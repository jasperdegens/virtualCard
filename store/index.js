/* Virtual Card Redux Store */

import virtualCardReducer from '../reducers/index';
import {createStore} from 'redux';

let store = createStore(virtualCardReducer);
export default store;