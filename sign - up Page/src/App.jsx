import { useState, useEffect } from "react";
import "./App.css";
// import { useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [isError, setIsError] = useState("");
  // validastion check
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  //  password storng
  function loginHandle(e) {
    if (user.length < 4 || password.length < 6) {
      alert("please fill all the details");
    } else {
      alert(" Sign - up successfully ✅");
    }

    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }

  // using Async Await
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.first.org/data/v1/countries");
        setCountry(res.data);
        // console.log(setCountry);
      } catch (error) {
        setIsError(error.message);
      }
    };

    getApiData();
  }, []);

  return (
    <>
      <form onSubmit={loginHandle}>
        <div className="p-5 flex flex-col  bg-zinc-500 m-auto w-96">
          <a href="#" className="underline">
            Sign Up
          </a>
          <p>please fill in this Form to create an account.</p>
          <hr />
          <label className="text-m text-left">
            First Name * <br />
          </label>
          <input
            className="border p-2 placeholder-black-600  bg-zinc-500 text-white outline-purple-900"
            type="text"
            placeholder="Enter Your First Name"
            onChange={userHandler}
          />{" "}
          {userErr ? <span>User Not Valid</span> : ""}
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
            onChange={userHandler}
          />{" "}
          {userErr ? <span>Email is Not Valid</span> : ""}
          <br />
          <label className="text-m text-left">
            Password * <br />
          </label>
          <input
            className="border p-2 placeholder-black-600  bg-zinc-500 text-white  outline-red-600"
            type="Password"
            placeholder="Enter Your email Password"
            onChange={passwordHandler}
          />{" "}
          {passErr ? <span>Password Not Valid</span> : ""}
          <br />
          <label className="text-m text-left">
            confirm Password *<br />
          </label>
          <input
            className="border p-2 placeholder-black-600  bg-zinc-500 text-white"
            type="Password"
            placeholder="confirm  Password"
          />
          <label className="text-sm text-left">
            select Your Country <br />
          </label>
          <select className="border p-2 placeholder-black-600  bg-zinc-500 text-white">
            <option value="country">~ Select Country ~</option>
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
            {/* <input type="text" placeholder="Select City"/> */}
            <option value="city">~ Select City ~</option>
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
            placeholder="number "
          />
          <label className="text-m text-left">gender *</label>
          <div className="text-left">
            <p>Please select your gender:</p>
            <input type="radio" name="gender" value="male" />
            <label>Male</label>
            <br />
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
            <br />
            <input type="radio" name="gender" value="female" />
            <label>Gey</label>
            <br />
            <b>By creating an account you agree to our</b>
            <a href="#" className="underline">
              Terms & Privacy
            </a>
            <br></br>
            <a className="ml-28">
              <label>
                <button>Sign Up</button>
              </label>
            </a>
          </div>
          <br />
          <hr />
        </div>
      </form>
      <b>
        <p>if you see any error please check again</p>
      </b>
      <br />
      <br />
      <a href="#">
        <button>
          <label>sign up with Google</label>
        </button>
      </a>
    </>
  );
}

export default App;
