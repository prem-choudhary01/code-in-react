import React, { Component } from "react";
class HoverCounterTwo extends Component {
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
        <h1 onMouseOver={incrementCount}>Hover {count} time</h1>
      </div>
    );
  }
}

export default HoverCounterTwo;
