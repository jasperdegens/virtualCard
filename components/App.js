/* Main App Component */

import React, {Component} from 'react';
import OptionsMenu from './OptionsMenu';
import {connect} from 'react-redux';

//import redux actions
import {addCoverImage, changeLetterText, removeCoverImage} from '../actions';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {dispatch, images, letterText} = this.props;
    return (
      <div className='app'>
        <OptionsMenu
          images={images}
          onAddImage={(title, description, imageURI) => {
            dispatch(addCoverImage(title, description, imageURI));
          }}
          onRemoveImage={index => {
            dispatch(removeCoverImage(index));
          }}
          onChangeText={(section, text) => {
            dispatch(changeLetterText(section, text));
          }} />
        <p>{letterText.salutation}</p>
      </div>
    );
  }

}

// inject props from state
function select(state){
  return {
    images: state.coverImages,
    letterText: state.letterText
  };
}

export default connect(select)(App);