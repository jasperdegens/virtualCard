/* Options Menu Component */

import React from 'react';
import ImagesContainer from './ImagesContainer';
import Accordian from './Accordian';

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'OptionsMenu';
    this.handleTextNodeChange = this.handleTextNodeChange.bind(this);
  }

  handleTextNodeChange(e){
    this.props.onChangeText(e.target.name, e.target.value);
  }

  render() {
    var letterSections = ['salutation', 'body', 'signature'].map((letterSection) => {
            return (
              <div key={letterSection} className="letter-section">
                <p>{letterSection} text</p>
                <textarea name={letterSection}
                    onChange={this.handleTextNodeChange} />
              </div>
            );
          });

    return (
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
    );
  }
}

OptionsMenu.propTypes = {
  images: React.PropTypes.array,
  onChangeText : React.PropTypes.func,
  onAddImage : React.PropTypes.func,
  onRemoveImage : React.PropTypes.func
};

OptionsMenu.defaultProps = {
  onAddImage: function(d){return {};},
  onChangeText : function(d){return {};}
}

module.exports = OptionsMenu;
