import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-5  py-1 rounded-full text-red shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-5  py-1 rounded-full text-black shadow-xl"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-5  py-1 rounded-full text-black shadow-xl"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-5  py-1 rounded-full text-green shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-5  py-1 rounded-full text-blue shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-10  py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
