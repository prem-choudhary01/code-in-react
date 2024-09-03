import React from "react";
import { useState } from "react";

export function ClickMe() {
  let [counter, setCounter] = useState(0);
  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  return (
    <>
      <button onClick={addvalue}>Click me {counter}</button>
    </>
  );
}

export default ClickMe
