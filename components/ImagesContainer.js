/* Images Container Component */

import React, {Component, PropTypes} from 'react';
import ImageList from './ImageList';

class ImagesContainer extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit(e){
    this.props.onAddImage({
      title: this.refs.title.value,
      description: this.refs.description.value,
      imageURI: this.refs.imageURI.value
    });
  }

  render(){
    return (
      <div className="images-container">
        <ImageList />
        <form className="new-image-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="title" ref="title" />
          <input type="text" ref="description" />
          <input type="text" ref="imageURI" />
          <button type="submit" value="submit">Add Image</button>
        </form>
      </div>
    );
  }
}

ImagesContainer.propTypes = {
  onAddImage : PropTypes.func
};

ImagesContainer.defaultProps = {
  onAddImage : function(e){
    e.preventDefault();
    return;
  }
}

module.exports = ImagesContainer;