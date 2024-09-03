import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// function myFoo(){
//   return(
//     <div>
//       <h1>Hello React User</h1>
//     </div>
//   )
// }

const anotherElemet = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);
const anotherUser = "Chai or dhudh "

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit Google ",
  // anotherUser
  // anotherElemet,
  // anotherUser
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
// myFoo()
//  anotherUser,
//  reactElement,
//  anotherElemet,  
<App />,
)

// reportWebVitals();
