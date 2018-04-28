import React, { Component } from 'react';
import logo from './preumskat.jpg';
import './App.css';
import ToggleBox from './ToggleBox';
import MyTimer from './MyTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ToggleBox title="show/hide clock">
           <MyTimer />
        </ToggleBox>
      </div>
    );
  }
}

export default App