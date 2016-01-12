//__tests__/ImageDetails-test.js
jest.dontMock('../ImageDetails');


import React from 'react';
import TestUtils from 'react-addons-test-utils';

const ImageDetails = require('../ImageDetails');

describe('Image Details Tests', () => {
  var testData = {
      title: 'Image A',
      description: 'Me walking in park',
      imageURI: 'www.google.com'
    };

  // create component and reset for each test
  var imageEntry;
  beforeEach(function(){
    imageEntry = TestUtils.renderIntoDocument(
      <ImageDetails title={testData.title}
        description={testData.description}
        imageURI={testData.imageURI} />
    );
  });

  it('Should contain title, description, and url', () => {

    //title check
    var title = TestUtils.findRenderedDOMComponentWithTag(imageEntry, 'h2');
    expect(title.textContent).toEqual('Image A');

    // description and url
    var para = TestUtils.findRenderedDOMComponentWithTag(imageEntry, 'p');
    expect(para.textContent).toEqual('Me walking in park');
    var imgPreview = TestUtils.findRenderedDOMComponentWithTag(imageEntry, 'img');
    expect(imgPreview.src).toEqual('www.google.com');
  });

  it('Should by default be closed', () => {
    expect(imageEntry.state.isOpen).toBeFalsy();
  });

  it('Should change state to open when open button is clicked, and false when clicked again', () => {
    const toggleOpenButton = TestUtils.findRenderedDOMComponentWithClass(imageEntry, "toggle-open");
    TestUtils.Simulate.click(toggleOpenButton);
    expect(imageEntry.state.isOpen).toBeTruthy();
    TestUtils.Simulate.click(toggleOpenButton);
    expect(imageEntry.state.isOpen).toBeFalsy();
  })


})