import { useState } from "react";
import "./App.css";
import Exercise from "./exercise";


function App() {
  const [count, setCount] = useState(0)

  return (
    // <Appuse/>
    <Exercise/>
  );
}

export default App;
