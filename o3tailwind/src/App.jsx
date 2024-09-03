import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // console.log("props" , props)
  // const [count, setCount] = useState(0);
  // let myObj = {
  //   username : 'Tailwind',
  //   age: 21,
  // };

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-5">
        Tailwind test
      </h1>
      <Card username="Always you there"  />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
