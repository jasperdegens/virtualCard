/* Options Menu Component */

import React from 'react';
import ImagesContainer from './ImagesContainer';
import Accordian from './Accordian';
import classNames from 'classnames';

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'OptionsMenu';
    this.handleTextNodeChange = this.handleTextNodeChange.bind(this);
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.state= {
      isOpen : true
    };
  }
  componentDidMount(){
    //initiall set contents of textareas
    for (var section in this.props.letterText) {
      this.refs[section].value = this.props.letterText[section];
    }
  }

  handleTextNodeChange(e){
    this.props.onChangeText(e.target.name, e.target.value);
  }

  handleToggleOpen(e){
    this.setState({
      isOpen : !this.state.isOpen
    });
  }

  render() {
    var letterSections = ['salutation', 'body', 'signature'].map((letterSection) => {
            return (
              <div key={letterSection} className="letter-section">
                <p>{letterSection} text</p>
                <textarea name={letterSection} ref={letterSection}
                    onChange={this.handleTextNodeChange} />
              </div>
            );
          });

    return (
      <div className={classNames("options-wrapper", {'open' : this.state.isOpen})}>
        <div className="options">
          <ImagesContainer images={this.props.images}
            onAddImage={this.props.onAddImage}
            onRemoveImage={this.props.onRemoveImage}/>
          <Accordian className="card-inside-options"
                     headerClass="inside-text-header"
                     title="Letter Text"
                     isOpen={true}>
            {letterSections}
          </Accordian>
        </div>
        <div className="toggle-options" onClick={this.handleToggleOpen} />
      </div>
    );
  }
}

OptionsMenu.propTypes = {
  images: React.PropTypes.array,
  onChangeText : React.PropTypes.func,
  onAddImage : React.PropTypes.func,
  onRemoveImage : React.PropTypes.func,
  letterText : React.PropTypes.object
};

OptionsMenu.defaultProps = {
  onAddImage: function(d){return {};},
  onChangeText : function(d){return {};}
}

module.exports = OptionsMenu;
