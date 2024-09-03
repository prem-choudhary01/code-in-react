import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//       <h1>
//         Welcome {this.props.name} && {this.props.fatherName}
//       </h1>
//     );
//   }
// }

class Welcome extends Component {
  render() {
    const { name, fatherName, obj } = this.props;
    if (obj.length) {
      return (
        <div>
          {obj.map(({ name, fatherName }) => (
            <h1>
              Welcome {name} son of {fatherName}
            </h1>
          ))}
        </div>
      );
    }
    return (
      <h1>
        Welcome {name} son of {fatherName}
      </h1>
    );
  }
}

export default Welcome;
