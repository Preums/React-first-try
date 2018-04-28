import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';



class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.name = props.name;
console.log(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.isToggleOn ? `Hi Dude !` : `My name is ${this.name}, the Brave, dude !`}
      </div>
    );
  }
}

ReactDOM.render(
  <Author name="Preums"/>,
  document.getElementById('welcome')
);

export default Author;