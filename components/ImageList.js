/* Image List Component */

import React, {Component, PropTypes} from 'react';
import ImageDetails from './ImageDetails';

class ImageList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var imageItems = this.props.images.map((data, index) => {
      return (<ImageDetails {...data}
                key={index} />
      );
    });
    return (
      <div className="image-list">
        {imageItems}
      </div>
    );
  }

}

ImageList.propTypes = {
  images: PropTypes.array
};

module.exports = ImageList;