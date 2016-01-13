//__tests__/ImageList-test.js
jest.dontMock('../ImageList.js');
jest.dontMock('../ImageDetails.js');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
var ImageList = require('../ImageList');
var ImageDetails = require('../ImageDetails');

describe('Image List Tests', () => {
  var sampleData = [
    {
      title: 'A',
      description: 'B',
      imageURI: 'C'
    },
    {
      title: 'AA',
      description: 'BB',
      imageURI: 'CC'
    }
  ];
  var imageList;
  beforeEach(function(){
    imageList = TestUtils.renderIntoDocument(<ImageList images={sampleData} />);
  });

  it("Should have two items in list", () => {
    var imageDetailItems = TestUtils.scryRenderedComponentsWithType(imageList, ImageDetails);
    expect(imageDetailItems.length).toEqual(2);
  });
});