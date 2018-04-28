import React, { Component } from 'react';

class ToggleBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        opened: false,
      };
      
      this.toggleBox = this.toggleBox.bind(this);
    }
  
    toggleBox() {
      const { opened } = this.state;
      this.setState({
        opened: !opened,
      });
    }
  
    render() {
      const { title, children } = this.props;
      const { opened } = this.state;
      return (
        <div className="box">
          <input type="button" value={title} className="boxTitle" onClick={this.toggleBox} />
            {opened && children && (
            <div className="boxContent">
                {children}
            </div>
          )}
        </div>
      );
    }
  }

  export default ToggleBox;