/* Reducers */

import * as actions from '../actions/index';
import {combineReducers} from 'redux';

function coverImages(state = [], action){
  switch (action.type) {
    case actions.ADD_COVER_IMAGE:
      return [
        ...state,
        {
          image: action.image,
          description: action.description
        }
      ];
    case actions.REMOVE_COVER_IMAGE:
      if (state[action.index] !== undefined) {
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      }

    default:
      return state;
  }
}

const virtualCardReducer = combineReducers({
  coverImages
});

export default virtualCardReducer;