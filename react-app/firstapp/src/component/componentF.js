import React, { Component } from "react";
import { UserConsumer } from "./userContex";
class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div> Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
