/* Tests for Redux Actions */

import * as actions from '../actions/index';
import virtualCardReducer from '../reducers/index';
import store from '../store/index';
import chai, {expect} from 'chai';

const image = 'http://cdn.shopclues.net/images/detailed/14103/paintings2_1427095927.jpg';
const descr = 'Woman in Rain'; 

describe('redux actions', () => {
  
  it('Should create an addCoverImage action', () => {
    const expectedAction = {
      type : actions.ADD_COVER_IMAGE,
      image: image,
      description: descr
    };
    expect(actions.addCoverImage(image, descr)).to.deep.equal(expectedAction);
  });

  it('Should create a changeLetterText action', () => {
    const section = 'salutation';
    const text = 'Dearest Jasper';
    const expectedAction = {
      type: actions.CHANGE_LETTER_TEXT,
      section: section,
      text: text
    };
    expect(actions.changeLetterText(section, text)).to.deep.equal(expectedAction);
  });
});

/* Reducer Tests */

describe('Cover image reducer tests', () => {
  it('Should create a new state with one image, and original state stay empty', () => {
    const initialState = {coverImages: []};
    const addImageActionCreator = actions.addCoverImage(image, descr);
    const newState = virtualCardReducer(initialState, addImageActionCreator);
    expect(newState.coverImages.length).to.equal(1);
    expect(initialState.coverImages.length).to.equal(0);
  });

  (function testRemoveFunctionality(){
    var sampleData = [];
    for(var i = 0; i < 4; i ++){
      sampleData.push({image: 'a'+i, description: 'example ' + i});
    }
    const initialState = {coverImages : sampleData};
    const removeImageCreator = actions.removeCoverImage(2);
    const newState = virtualCardReducer(initialState, removeImageCreator);
    it('Should remove image entry', () => {
      expect(newState.coverImages.length).to.equal(3);
    });
    it('Shold preserve initial state',  () => {
      expect(initialState.coverImages.length).to.equal(4); 
    })
    it('Should ensure correct image removed', () => {
      expect(newState.coverImages).to.deep.contain({image:'a1', description: 'example 1'});
      expect(newState.coverImages).to.not.deep.contain({image:'a2', description: 'example 2'});
    });
  })();
});

describe('Style change reducer tests', () =>{
  // Style Tests
  it('Should add new styles for component', () => {
    const initialState = {styles: {}};
    const styleActionCreator = actions.changeStyle('cover', {position: 'top'});
    const newState = virtualCardReducer(initialState, styleActionCreator);
    expect(newState.styles).to.deep.equal({'cover': {position: 'top'}});
  });

  it('Should update styles for component', () => {
    const initialState = {styles: {'cover' : {position: 'top'}}};
    const styleActionCreator = actions.changeStyle('cover', {position: 'bottom'});
    const newState = virtualCardReducer(initialState, styleActionCreator);
    expect(newState.styles).to.deep.equal({'cover': {position: 'bottom'}});
  });

  it('Should add new style within component', () => {
    const initialState = {styles: {'cover' : {position: 'top'}}};
    const styleActionCreator = actions.changeStyle('cover', {color: 'blue'});
    const newState = virtualCardReducer(initialState, styleActionCreator);
    expect(newState.styles).to.deep.equal({'cover': {position: 'top', color: 'blue'}});
  }); 

  it('Should add new component w/ multiple styles', () => {
    const initialState = {styles: {'cover' : {position: 'top'}}};
    const styleActionCreator = actions.changeStyle('letter', {position: 'bottom', color: 'blue'});
    const newState = virtualCardReducer(initialState, styleActionCreator);
    expect(newState.styles).to.deep.equal({'letter': {position: 'bottom', color: 'blue'},
                                            'cover' : {position: 'top'}});
  });
})

describe('Letter Text reducer tests', () => {
  it('Should add new text section', () => {
    const initialState = {letterText : {}};
    const textActionCreator = actions.changeLetterText('body', 'aaa');
    const newState = virtualCardReducer(initialState, textActionCreator);
    expect(newState.letterText).to.deep.equal({body: 'aaa'});
  });

  it('Should modify text section', () => {
    const initialState = {letterText : {'signature' : 'aaa'}};
    const textActionCreator = actions.changeLetterText('signature', 'bbb');
    const newState = virtualCardReducer(initialState, textActionCreator);
    expect(newState.letterText).to.deep.equal({signature: 'bbb'});
  });

  it('Should create new text section and add to existing state', () => {
    const initialState = {letterText : {'body' : 'aaa'}};
    const textActionCreator = actions.changeLetterText('cover', 'ccc');
    const newState = virtualCardReducer(initialState, textActionCreator);
    expect(newState.letterText).to.deep.equal({body: 'aaa', cover: 'ccc'});
  });

});

describe('Testing store as a whole', () => {
  it('Should initialize as an empty store', () => {
    expect(store.getState()).to.deep.equal({coverImages: [], 
                                            styles: {},
                                            letterText: {}});
  });
  it('Should correctly dispatch and update store', () => {
    store.dispatch(actions.changeLetterText('body', 'ccc'));
    expect(store.getState().letterText).to.deep.equal({'body': 'ccc'});
  })
})
