/* Reducers */

import * as actions from '../actions/index';
import {combineReducers} from 'redux';

/* Reducer that handles changes to cover images */
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

/* Reducer that handles changes in style for various components */
function styles(state = {}, action){
  if (action.type === actions.CHANGE_STYLE) {
    //update component styles
    var updatedComponentStyles = Object.assign({},
                              state[action.component],
                              action.styles);
    //update state with updated component styles
    var updatedComponent = {};
    updatedComponent[action.component] = updatedComponentStyles;
    return Object.assign({}, 
                        state, 
                        updatedComponent);
  }
  return state;
}

function letterText(state = {}, action){
  if (action.type === actions.CHANGE_LETTER_TEXT) {
    var newSection = {};
    newSection[action.section] = action.text;
    return Object.assign({}, state, newSection);
  }
  return state;
}

const virtualCardReducer = combineReducers({
  coverImages,
  styles,
  letterText
});

export default virtualCardReducer;