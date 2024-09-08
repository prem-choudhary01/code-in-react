import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [color, setColor] = useState("black");


  const [registration , setRegistration] = useState(0)


  const registrationvaluae =()=> {
     
    setRegistration(registration + 1)
  }

  return (
    <>
      <div
        className="p-10 flex flex-col space-y-4 bg-zinc-500 h-full"
        // style={{backgroundColor : color}}
      >
        <h1 className="text-3xl text-red-100 p-5 underline">Sign Up</h1>
        <p>please fill in this Form to create an account.</p>
        <hr />
        <label className="text-2xl text-left">
          Email * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="text"
          placeholder="Enter Your Email"
        />
        <br />
        <label className="text-2xl text-left">
          Password * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="Password"
          placeholder="Enter Your email Password"
        />
        <br />
        <label className="text-2xl text-left">
          confirm Password *<br />{" "}
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="Password"
          placeholder="confirm  Password"   
        />
        <label>
          <input className=" p-2" type="checkbox" /> Remember me
        </label>
        <br />

        <p>
          By creating an account you agree to our{" "}
          <a href="#" className="underline">
            Terms & Privacy{" "}
          </a>{" "}
        </p>

        <br />
        <hr />
      </div>
      <p>if you see any error please check again</p>

      <br />
      <h3>registration {registration}</h3>
      <button onClick={registrationvaluae} className="bg-stone-700 outline-none px-5  py-1 rounded-full text-black-500 ">
    
        sign in
      </button>
      <button className="bg-stone-700 outline-none px-5  py-1 rounded-full text-black-500 shadow-xl ml-10">
        cancel <br />
      </button>
      <br />

    </>
  );
}

export default App;