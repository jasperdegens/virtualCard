/* Accordian Component */

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Accordian extends Component{
  constructor(props){
    super(props);
    this.state = {
      'isOpen' : this.props.isOpen ? this.props.isOpen : false
    };
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
  }

  handleToggleOpen(e){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div className={classNames(this.props.className, "accordian", {'open': this.state.isOpen})}>
        <div className={classNames(this.props.headerClass, "section-head")}
             style={Object.assign({}, this.props.headerStyle)}
             onClick={this.handleToggleOpen}>
                {this.props.title}
                <button className="toggle">toggle</button>
        </div>
        <div className="contents-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Accordian.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool
};

module.exports = Accordian;