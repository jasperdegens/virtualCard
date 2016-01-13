/* Image Details Component */

import React, { Component, PropTypes } from 'react';

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
    return (
      <div className="image-details">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img className="preview" src={this.props.imageURI} />
        <div className="toggle-open" onClick={this.toggleOpen.bind(this)}>+</div>
        <button className="delete" onClick={this.props.handleDelete}>remove</button>
      </div>
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
