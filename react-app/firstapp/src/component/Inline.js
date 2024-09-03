import React from "react";

const heading = {
  //   fontSize: "30px",
  color: "black",
  //   backGround - Color: "red";
};
const id = {
  fontSize: "20px",
  color: "green",
};
const id1 = {
  fontSize: "20px",
  color: "green",
};
const btn = {
  color: "green",
  margin: "20px",
};
const part = {
  color: "green",
};

export function Inline() {
  return (
    <div>
      <h1 style={part}>Fill this form </h1>
      <h1>Name*</h1>
      <input style={id} placeholder="first Name" />
      <h1 style={heading}>LastName*</h1>
      <input style={id1} placeholder="Last Name" />
      <h1>Enter Email</h1>
      <input style={id1} placeholder="Enter email" />

      <h1>Contact*</h1>
      <input style={id1} placeholder="Mobile Number" />
      <br></br>

      <button style={btn}>Submit</button>
    </div>
  );
}
