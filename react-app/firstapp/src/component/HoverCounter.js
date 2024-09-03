import React, { Component } from "react";
import { UpdatedComponent } from "./WithCounter";

class HoverCounter extends Component {
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
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>
        Hovered {count} times </h2>;
  }
}
export default UpdatedComponent(HoverCounter , 10 );
