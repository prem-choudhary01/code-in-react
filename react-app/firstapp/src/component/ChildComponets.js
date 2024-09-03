import React from "react";
function ChildComponet(props) {
  return (
    <div>
      <button onClick={props.greetHandler("child")}>Greet parent </button>
    </div>
  );
}
export default ChildComponet;
