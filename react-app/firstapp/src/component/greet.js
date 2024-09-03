import React from "react";

// export const Greet = () => {
//   return <h1>Hello React User</h1>;
// };

//  export default Greet;

const Greet = () => {
  return (
    <>
     <div>
     <h1>This is functional components</h1>
      <h2>Hello React User</h2>
      <h2>Welcome to React library</h2>
      <h2>this is a heading number 2</h2>
      <h2>How's coding going</h2>
      <h3>what is up </h3>
      {new Date().toDateString()}
      
      <br/>
      <br/>
      {2 + 5} is seven in word
      <br/>
      {7} is odd number 

     </div>
    </>
  );
};

export default Greet;
