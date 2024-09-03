import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from './componetnt'

function App() {
  let [counter, setCounter] = useState(0);
  // let [remove, setRemove] = useState(20);
  let [multiplication, setMultiplication] = useState(2);

  const addvalue = () => {
    if (counter >= 20) return;
    // counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    if (counter <= 0) return;
    counter = counter - 1;
    setCounter(counter);
  };
  const multiplicationValue = () => {
    setMultiplication(multiplication * 2);
  };

  return (
    <>
      <h2>counter btn</h2>
      <h3> add total {counter}</h3>

      <button onClick={addvalue}>add value 🡢 </button>
      <br />
      <br />
      <h3>Remove Value</h3>
      <button onClick={removeValue}>remove value 🡢 </button>
      <br />
      <br />
      <h3>multiplication total {multiplication} </h3>
      <button onClick={multiplicationValue}>
        multiplication {multiplication} 🡢
      </button>
    </>
  );
}

export default App;
