/* Card Component */

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import SlideShow from './SlideShow';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <div onClick={this.handleClick} 
           className={classNames("card", {'open': this.state.isOpen})}>
        <CardCover images={this.props.images} />
        <CardInside 
          salutation={this.props.letterText.salutation ? 
              this.props.letterText.salutation : ''}
          body={this.props.letterText.body ? 
              this.props.letterText.body : ''}
          signature={this.props.letterText.signature ? 
              this.props.letterText.signature : ''} />
      </div>
    );
  }
}

Card.propTypse = {
  images: PropTypes.array,
  letterText: PropTypes.object.isRequired
}

class CardCover extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // preload cover images
    for(var i = 1; i < this.props.images.length; i++){
      var r = new XMLHttpRequest();
      r.open("GET", this.props.images[i].imageURI, true);
      r.send();
    }
  }

  render(){
    var imagePanels = this.props.images.map((image, index)=>{
      var style = {background: "url('"+image.imageURI+"')", 
                   backgroundSize: 'cover !important',
                   backgroundPosition: 'center',
                   width: '100%',
                   height: '100%'};
      return (
        <div style={style}>
          <div className="slide-info">
            <p className="title">{image.title}</p>
            <p className="description">{image.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="card-panel card-cover">
        <SlideShow slides={imagePanels} />
      </div>
    );
  }
}



class CardInside extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var addLineBreaks = (text) => {
      return {__html: text.replace(/\n\r?/g, '<br />')};
    };
    return (
      <div className="card-panel card-inside">
        <div className="letter">
          <h1 className="salutation"
              dangerouslySetInnerHTML={addLineBreaks(this.props.salutation)}></h1>
          <p className="letter-body"
              dangerouslySetInnerHTML={addLineBreaks(this.props.body)}></p>
          <p className="signature"
             dangerouslySetInnerHTML={addLineBreaks(this.props.signature)}></p>
        </div>
      </div>
    );
  }
}

module.exports = Card;