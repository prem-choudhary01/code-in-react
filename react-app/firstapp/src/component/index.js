import React from "react";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} S/O .{props.fatherName}
      </h1>
      {props.children}
    </div>
  );
};

export default Index;
