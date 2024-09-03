import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("black ");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-5  py-1 rounded-full text-black shadow-xl"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("Magenta")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>

          <button
            onClick={() => setColor("DeepPink")}
            className="outline-none px-5  py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "DeepPink" }}
          >
            DeepPink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
