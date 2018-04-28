import React from 'react';

const FormattedDate = (props) => {
    return <h2>{props.date.toLocaleTimeString()} !</h2>;
  }
  
  class MyTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      let hour = new Date();
      this.setState({
        date: hour
      });
      console.log('Un update a été effectué à '+ hour.toLocaleTimeString());
    }
  
    render() {
      return (
        <div>
          <h1>Hi Dude, current time is:</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }

export default MyTimer;