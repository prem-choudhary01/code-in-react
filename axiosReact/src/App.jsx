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
   <article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>
    
    </>
  );
}

export default App;
