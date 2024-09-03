import React, { Component } from "react";
class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(false)}
        {/* Hello React User 
                    How are you all 
                    React is very easy  */}
      </div>
    );
  }
}
export default User;
