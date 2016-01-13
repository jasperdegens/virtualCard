/* Options Menu Component */

import React from 'react';

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'OptionsMenu';
    this.handleTextNodeChange = this.handleTextNodeChange.bind(this);
  }

  handleTextNodeChange(e){
    var data = {};
    data[e.target.name] = e.target.value;
    this.props.onTextChange(data);
  }

  render() {
    var letterSections = ['salutation', 'body', 'signature'].map((letterSection) => {
            return (
              <textarea name={letterSection} key={letterSection}
                    onChange={this.handleTextNodeChange} />
            );
          });

    return (
      <div className="options">
        <div className="card-inside">
          {letterSections}
        </div>
      </div>
    );
  }
}

OptionsMenu.propTypes = {
  onTextChange : React.PropTypes.func
};

OptionsMenu.defaultProps = {
  onTextChange : function(d){return {};}
}

module.exports = OptionsMenu;
