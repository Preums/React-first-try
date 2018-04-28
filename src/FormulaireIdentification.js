import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function check(str) {
    let result = {answer:'', strongness:'poor'};
    let short = new RegExp('^.{1,6}$');
    let average = new RegExp('[A-Z0-9]');
    let strong = new RegExp('[^a-zA-Z0-9]');
    if (short.test(str)) {
        result.answer = `Your current password is too short`;
        result.strongness = 'poor';
    } else if (!(short.test(str)) && (strong.test(str)) && (average.test(str)) ) {
        result.answer = `You have a really strong password !`;
        result.strongness = 'strong';
    } else if (!(short.test(str)) && (average.test(str)) && !(strong.test(str))) {
        result.answer = `Your password is average but special characters could make it stronger`;
        result.strongness = 'medium';
    } else {
        result.answer = `Your current password is too poor`;
        result.strongness = 'poor';
    };
    return result;
}

class PassForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          safetyLevel : 'Poor',
          strongness : 'poor'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        this.setState({safetyLevel: check(e.target.value).answer});
        this.setState({strongness: check(e.target.value).strongness});
    }
  
    handleSubmit(e) {
        if (this.state.strongness !== 'poor') {
            alert('Your password has been set as: ' + this.state.value);
            e.preventDefault();
        } else {
            alert("Your password hasn't been set, to weak !: " + this.state.value);
            e.preventDefault();}
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                New Password:
                <input type="password" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
                <input type="submit" value="Submit" />
                <br/>
                Password stength: {this.state.safetyLevel}
            </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <PassForm name=""/>,
    document.getElementById('form')
  );

export default PassForm;