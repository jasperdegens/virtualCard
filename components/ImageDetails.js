/* Image Details Component */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Accordian from './Accordian';

class ImageDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOpen(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    var containerClasses = classNames('image-details', 
                            {'open' : this.state.isOpen});

    return (
      <Accordian title={this.props.title}
                 className="image-details-wrapper">
        <div className="image-details">
          <p>{this.props.description}</p>
          <img className="preview" src={this.props.imageURI} />
          <button className="delete gray-button" onClick={this.props.handleDelete}>remove</button>
        </div>
      </Accordian>
    );
  }

}


ImageDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageURI: PropTypes.string.isRequired
}

// need to do export workaround for tests to work
// export default ImageDetails;
module.exports = ImageDetails;
