import React, { Component } from "react";
import { UpdatedComponent } from "./WithCounter";

class ClickCounter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //   incrementCount = () => {
  //     this.setState((pervState) => {
  //       return { count: pervState.count + 1 };
  //     });
  //   };

  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} time</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter , 5);
