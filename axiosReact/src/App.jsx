import { useState, useEffect } from "react";
import "./App.css";
// import { useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [isError, setIsError] = useState("");
 
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
     
    </>
  );
}

export default App;
