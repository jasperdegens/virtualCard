/* Image List Component */

import React, {Component, PropTypes} from 'react';
import ImageDetails from './ImageDetails';

class ImageList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var self = this;
    var imageItems = this.props.images.map((data, index) => {
      return (<ImageDetails {...data}
                handleDelete={function(){
                  self.props.onRemoveImage(index);
                }}
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
  images: PropTypes.array,
  onRemoveImage: PropTypes.func
};

ImageList.defaultProps = {
  images: []
};

module.exports = ImageList;