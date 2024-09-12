// import React from "react";
// import ReactDOM from "react-dom";

// function Car(props) {
//   return <h1> I am a {props.brand} !</h1>;
// }
// function Garage() {
//   return (
//     <>
//       <h1> Who lives in my garage</h1>
//       <Car brand="ford" />
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root from "react";


import React from 'react';
// import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

export default Football