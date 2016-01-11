/* Tests for Redux Actions */

import * as actions from '../actions/index';
import virtualCardReducer from '../reducers/index'
import chai, {expect} from 'chai';
chai.use(require('chai-shallow-deep-equal'));


const image = 'http://cdn.shopclues.net/images/detailed/14103/paintings2_1427095927.jpg';
const descr = 'Woman in Rain'; 

describe('redux actions', () => {
  
  it('Should create an addCoverImage action', () => {
    const expectedAction = {
      type : actions.ADD_COVER_IMAGE,
      image: image,
      description: descr
    };
    expect(actions.addCoverImage(image, descr)).to.shallowDeepEqual(expectedAction);
  });

  it('Should create a changeLetterText action', () => {
    const section = 'salutation';
    const text = 'Dearest Jasper';
    const expectedAction = {
      type: actions.CHANGE_LETTER_TEXT,
      section: section,
      value: text
    };
    expect(actions.changeLetterText(section, text)).to.shallowDeepEqual(expectedAction);
  });
});

/* Reducer Tests */

describe('reducer tests', () => {
  it('Should create a new state with one image, and original state stay empty', () => {
    const initialState = {coverImages: []};
    const addImageActionCreator = actions.addCoverImage(image, descr);
    const newState = virtualCardReducer(initialState, addImageActionCreator);
    expect(newState.coverImages.length).to.equal(1);
    expect(initialState.coverImages.length).to.equal(0);
  });

  var sampleData = [];
  for(var i = 0; i < 4; i ++){
    sampleData.push({image: 'a'+i, description: 'example ' + i});
  }
  const initialState = {coverImages : sampleData};
  const removeImageCreator = actions.removeCoverImage(2);
  const newState = virtualCardReducer(initialState, removeImageCreator);
  it('Should remove image entry but preserve initial state', () => {
    expect(newState.coverImages.length).to.equal(3);
    expect(initialState.coverImages.length).to.equal(4); 
  });
  it('Should ensure correct image removed', () => {
    expect(newState.coverImages).to.deep.contain({image:'a1', description: 'example 1'});
    expect(newState.coverImages).to.not.deep.contain({image:'a2', description: 'example 2'});
  });

})
