/* Actions for VirtualCard.js */

/* action types */
export const ADD_COVER_IMAGE = 'ADD_COVER_IMAGE';
export const REMOVE_COVER_IMAGE = 'REMOVE_COVER_IMAGE';

export const CHANGE_STYLE = 'CHANGE_STYLE';

export const CHANGE_LETTER_TEXT = 'CHANGE_LETTER_TEXT';

/* action creators */
export function addCoverImage(imageURI, description){
  return {type: ADD_COVER_IMAGE, image: imageURI, description: description};
}

export function removeCoverImage(index){
  return {type: REMOVE_COVER_IMAGE, index: index};
}

// directly passes styles. should styles be dic or array of dict
export function changeStyle(component, styles){
  return {type: CHANGE_STYLE, component: component, styles: styles};
}

// makes more sense to already have section + value be dict?
export function changeLetterText(section, text){
  return {type: CHANGE_LETTER_TEXT, section: section, text: text};
}

