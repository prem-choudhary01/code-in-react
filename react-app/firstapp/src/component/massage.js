import React, { Component } from "react";

class Massage extends Component {
  constructor() {
    super();
    this.state = {
      massage: "welcome to my page",
    };
  }
  changeMassage() {
    this.setState({
      massage: "Thank You !!!!",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <button onClick={() => this.changeMassage()}>Click me</button>
      </div>
    );
  }
}

export default Massage;
