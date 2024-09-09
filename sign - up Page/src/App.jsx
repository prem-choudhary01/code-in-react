// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [color, setColor] = useState("black");

  // const [registration, setRegistration] = useState(0);

  // const registrationvaluae = () => {
  //   setRegistration(registration + 1);
  //   console.log(registration)
  // };

  return (
    <>
      <div
        className="p-5 flex flex-col  bg-zinc-500 m-auto w-96"
        // style={{backgroundColor : color}}
      >
        {/* <h1 className="text-3xl text-red-100 p-5 underline">Sign Up</h1> */}
        <a href="#" className="underline">
          Sign Up
        </a>

        <p>please fill in this Form to create an account.</p>
        <hr />
        <label className="text-m text-left">
          First Name * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="text"
          placeholder="Enter Your First Name"
        />
        <br />
        <label className="text-m text-left">
          Last Name * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="text"
          placeholder="Enter Your Last Name"
        />
        <br />
        <label className="text-m text-left">Email *</label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="text"
          placeholder="Enter Your Email"
        />
        <br />
        <label className="text-m text-left">
          Password * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="Password"
          pattern="[^ @]*@[^ @]*"
          placeholder="Enter Your email Password"
        />
        <br />
        {/* <form>
<input type="email" placeholder="Enter your email"/>
<input type="submit" value="Submit"/>
</form> */}
        <label className="text-m text-left">
          confirm Password *<br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="Password"
          pattern="[^ @]*@[^ @]*"
          placeholder="confirm  Password"
        />

        <label className="text-sm text-left">
          select Your Country <br />
        </label>
        <select className="border p-2 placeholder-black-600  bg-zinc-500 text-white">
          <option value="india">india</option>
          <option value="USA">UAS</option>
          <option value="uk">UK</option>
          <option value="aus">Australia</option>
          <option value="nz">New Zealand</option>
        </select>

        <label className="text-sm text-left">
          select Your City <br />
        </label>
        <select className="border p-2 placeholder-black-600  bg-zinc-500 text-white">
          <option value="india">Pune</option>
          <option value="USA">Mumbie</option>
          <option value="uk">Dehli</option>
          <option value="aus">Surat</option>
          <option value="nz">Bengalore</option>
        </select>

        <label className="text-m text-left">
          contact * <br />
        </label>
        <input
          className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
          type="contact"
          placeholder="91 - "
        />

        <label className="text-m text-left">gender *{/* <br /> */}</label>

        <div className="text-left">
          <p>Please select your gender:</p>
          <input type="radio" name="gender" value="male" />
          <label>Male</label>
          <br />
          <input type="radio" name="gender" value="female" />
          <label>female</label>
          <br />
          <b>By creating an account you agree to our</b>
          <a href="#" className="underline">
            Terms & Privacy
          </a>
        </div>

        <br />
        <hr />
      </div>
      <b>
        <p>if you see any error please check again</p>
      </b>
      <br />
      {/* <h3>registration {registration}</h3>     */}
      <div className="bg-slate-950-700 outline-none px-5  py-1 rounded-full text-black-500 ">
        <button
        // onClick={registrationvaluae}
        >
          Sign Up
        </button>
        <button className="ml-10">
          cancel <br />
        </button>
      </div>
      <br />
    </>
  );
}

export default App;
