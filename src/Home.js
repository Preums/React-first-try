import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1
          onClick={() => {
            this.props.alert.success("I'm Preums the brave, Dude!");
          }}
        >
          Hi Man!
        </h1>
      </Fragment>
    );
  }
}

export default withAlert(Home);