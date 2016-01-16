//__tests__/OptionsMenu-test.js

jest.dontMock('../OptionsMenu');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

var OptionsMenu = require('../OptionsMenu');

describe('Options Menu Tests', () => {
  
  var optionsMenu;
  beforeEach(function(){
    optionsMenu = TestUtils.renderIntoDocument(<OptionsMenu />)
  })

  it('should have three text sections', () => {
    var textInputs = TestUtils.scryRenderedDOMComponentsWithTag(optionsMenu, 'textarea');
    expect(textInputs.length).toEqual(3);
  });

  it('should create correct action for textarea update', () => {
    var textData = {};
    var handleTextChange = function(section, text){
      textData[section] = text;
    };
    var menu = TestUtils.renderIntoDocument(<OptionsMenu 
                            onChangeText={handleTextChange} />);
    var textInputs = TestUtils.scryRenderedDOMComponentsWithTag(menu, 'textarea');
    var salutation = textInputs[0];
    expect(salutation.name).toEqual('salutation');
    salutation.value = 'a';
    TestUtils.Simulate.change(salutation);
    // TestUtils.Simulate.change(salutation, {keyCode: 65});
    expect(textData).toEqual({salutation: 'a'});
  })
})
