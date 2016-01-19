/* Images Container Component */

import React, {Component, PropTypes} from 'react';
import ImageList from './ImageList';
import Accordian from './Accordian';

class ImagesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      uriExpand : false
    };
    this.handleURIChange = this.handleURIChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddImage(this.refs.title.value,
                          this.refs.description.value,
                          this.refs.imageURI.value
    );
    this.resetFields();
  }

  handleURIChange(e){
    if (this.refs.imageURI.value) {
      this.setState({
        uriExpand : true
      });
    } else {
      this.setState({
        uriExpand : false
      });
    }
  }

  handleFileUpload(e){
    var self = this;
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function(){
      self.refs.imageURI.value = reader.result;
      self.setState({
        uriExpand : true
      });
    });
    if(file){
      reader.readAsDataURL(file);
    }
  }

  resetFields(){
    this.refs.title.value = '';
    this.refs.description.value = '';
    this.refs.imageURI.value = '';
    this.setState({
      uriExpand: false
    });
  }

  render(){

    return (
      <div className="images-container">
        <h2>{(this.props.images.length === 0) ? 'No ': ''} Cover Images</h2>
        <ImageList images={this.props.images} onRemoveImage={this.props.onRemoveImage}/>
        <Accordian title="Add New Image"
                   isOpen={false}
                   headerClass="new-image-header">
          <form className="new-image-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" ref="title" />
            <input type="text" placeholder="Description" ref="description" />
            <p>Image</p>
            <div className="flex">
              <input style={{marginRight: '10px'}}
                     type="text" 
                     onChange={this.handleURIChange}
                     placeholder="URL" 
                     ref="imageURI" />
              {this.state.uriExpand ? null :
              <div className="image-upload">
                <button className="gray-box"
                      style={{marginTop: '0px'}}>Upload</button>
                <input type="file" accept="image/*" onChange={this.handleFileUpload} />
              </div>
              }
            </div>
            <button type="submit" value="submit" 
                    className="gray-box">Add Image</button>
          </form>
        </Accordian>
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