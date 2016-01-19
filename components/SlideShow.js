/* Slideshow Component */

import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var SlideShow = React.createClass({
  propTypes: {
    slides : React.PropTypes.array
  },

  getInitialState: function(){
    return {
      currSlide: 0,
      numSlides: this.props.slides.length
    }
  },

  componentWillReceiveProps: function(nextProps){
    if (this.props.slides.length !== nextProps.slides.length) {
      this.setState({
        currSlide: 0,
        numSlides: nextProps.slides.length
      });
    }
  },

  changeSlide: function(){
    this.setState({currSlide: (this.state.currSlide + 1)%this.state.numSlides});
  },

  componentDidMount: function(){
    this._changeSlide = setInterval(this.changeSlide, 9000);
  },
  componentWillUnmount: function(){
    if(this._changeSlide){
      clearInterval(this._changeSlide);
      this._changeSlide = null;
    }
  },

  render: function(){

    var currSlide = this.props.slides[this.state.currSlide];

    return(
      <div className={classNames(this.props.className, 'slideshow')}>
        <ReactCSSTransitionGroup transitionName="slide-animation" transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
          <div key={this.state.currSlide} className="slide">
            {currSlide}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = SlideShow;