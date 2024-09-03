import React from "react";

// const Foo = ({name, age}) => {
//   // console.log(props)
//   return (
//     <div>
//       <h1>
//         Hello {name} age is {age}
//       </h1>
//     </div>
//   );
// };


const Foo = props => {
    const {name , age} = props
    // console.log(props)
    return (
      <div>
        <h1>
          Hello {name} your  age is {age}
        </h1>
      </div>
    );
  };


  

export default Foo;
// export default Welcome
