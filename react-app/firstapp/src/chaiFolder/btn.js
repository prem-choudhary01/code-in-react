import React from "react";
import { useState } from "react";

function Button() {
  let [counter, setCounter] = useState(0);
  const addvalue = () => {
    if (counter === 20) return;
    counter = counter + 1;
    setCounter(counter);    
  };
  const removevalue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h3> Radhe Radhe and Happy krishna janmashtami</h3>
      <br></br>
      <h3>Counter Value is = {counter} </h3>
      <button onClick={addvalue}> add value = {counter} </button>
      <br></br>
      <br></br>
      <button onClick={removevalue}>remove value = {counter} </button>
      <br></br>
      <br></br>
      <p>Footer </p>
      {/* <Button/> */}
    </>
  );
}
export default Button;
