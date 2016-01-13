//__tests__/ImagesContainer-test.js

jest.dontMock('../ImagesContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
var ImagesContainer = require('../ImagesContainer');
var ImageList = require('../ImageList');

describe('Images Container Test', () => {
  
  var container;
  beforeEach(function(){
    var newImageHandler = function(e){console.log(e)};
    container = TestUtils.renderIntoDocument(<ImagesContainer onAddImage={newImageHandler}/>);
  });

  it('Should contain form components for title, description, and url', () => {
    var title = ReactDOM.findDOMNode(container.refs.title);
    expect(title.type).toEqual('text');
    var description = ReactDOM.findDOMNode(container.refs.description);
    expect(description.type).toEqual('text');
    var imageURI = ReactDOM.findDOMNode(container.refs.imageURI);
    expect(imageURI.type).toEqual('text');
  });
  it('Should generate new image data for action', () => {
    var newImageData = undefined;
    var newImageCreate = function(data){
      newImageData = data;
    };
    expect(newImageData).toBeFalsy();
    var newContainer = TestUtils.renderIntoDocument(<ImagesContainer onAddImage={newImageCreate} />);
    var form = TestUtils.findRenderedDOMComponentWithTag(newContainer, 'form');
    TestUtils.Simulate.submit(form);
    expect(newImageData.title).toBeDefined();
    expect(newImageData.description).toBeDefined();
    expect(newImageData.imageURI).toBeDefined();
  })
  it('Should contain an Image List', () => {
    expect(TestUtils.findRenderedComponentWithType(container, ImageList)).toBeDefined();
  });
})
