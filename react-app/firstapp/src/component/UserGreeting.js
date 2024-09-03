import React, { Component } from "react";
// import Massage from "./massage";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoggedIn: true,
    };
  }
  render() {
    // 4. short && circuit Operator

    // return this.state.IsLoggedIn && <div> Welcome User</div>;

    // 3. Ternry Conditional Operator
    // return this.state.IsLoggedIn ? (
    //   <div>Welco me User</div>
    // ) : (
    //   <div>Hello User</div>
    // );

    //   2.  return  element variables conditionl Rendering
    let massage;
    if (this.state.IsLoggedIn) {
      massage = <div>User IsLoggedIn </div>;
    } else {
      massage = <div>Welcome User</div>;
    }
    return <div>{massage}</div>;

    //   1.  1st to return conditionl Rendering

    //     if (this.state.IsLoggedIn) {
    //    Massage<div>
    //         <h2>Hello User Your Are IsLoggedIn</h2>
    //     </div>;
    //     } else {
    //     return <div>
    //         <h2>Welcome User</h2>
    //     </div>;
    // }
    // return (
    //   <div>
    //     <div> Hello User I Am React</div>
    //     <div>Welcome User</div>
    //   </div>
    // );
  }
}
