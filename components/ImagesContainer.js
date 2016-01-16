/* Images Container Component */

import React, {Component, PropTypes} from 'react';
import ImageList from './ImageList';

class ImagesContainer extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddImage(this.refs.title.value,
                          this.refs.description.value,
                          this.refs.imageURI.value
    );
  }

  render(){
    return (
      <div className="images-container">
        <h2>Current Images</h2>
        <ImageList images={this.props.images} onRemoveImage={this.props.onRemoveImage}/>
        <form className="new-image-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title" />
          <input type="text" ref="description" />
          <input type="text" ref="imageURI" />
          <button type="submit" value="submit">Add Image</button>
        </form>
      </div>
    );
  }
}

ImagesContainer.propTypes = {
  images: PropTypes.array,
  onAddImage : PropTypes.func
};

ImagesContainer.defaultProps = {
  onAddImage : function(e){
    e.preventDefault();
    return;
  }
}

module.exports = ImagesContainer;