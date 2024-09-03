import React, { Component } from "react";

class ClickCounterTwo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} Time </button>
      </div>
    );
  }
}
export default ClickCounterTwo;
