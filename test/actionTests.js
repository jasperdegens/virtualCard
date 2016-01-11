/* Tests for Redux Actions */

import * as actions from '../actions/index';
import chai, {expect} from 'chai';
chai.use(require('chai-shallow-deep-equal'));


describe('actions', () => {
  
  it('Should create an addCoverImage action', () => {
    const image = 'http://cdn.shopclues.net/images/detailed/14103/paintings2_1427095927.jpg';
    const descr = 'Woman in Rain';
    const expectedAction = {
      type : actions.ADD_COVER_IMAGE,
      image: image,
      description: descr
    };
    expect(actions.addCoverImage(image, descr)).to.shallowDeepEqual(expectedAction);
  });

});
