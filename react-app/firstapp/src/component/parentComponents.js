import React, { Component } from "react";
import ChildComponet from "./ChildComponets";

export class ParentComponets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    }; 
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childNmae) {
    alert(`Hello ${this.state.parentName } from ${childNmae}`);
  } 
  render() {
    return (
      <div>
        <ChildComponet greetHandler={this.greetParent} />
      </div>
    );
  }
}

// export class Welcome extends Component {
//   render() {
//     const { name, fatherName, obj } = this.props;
//     if (obj.length) {
//       return (
//         <div>
//           {obj.map(({ name, fatherName }) => (
//             <h1>
//               Welcome {name} son of {fatherName}
//             </h1>
//           ))}
//         </div>
//       );
//     }
//     return (
//       <h1>
//         Welcome {name} son of {fatherName}
//       </h1>
//     );
//   }
// }
