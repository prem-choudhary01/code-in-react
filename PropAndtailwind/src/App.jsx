import "./App.css";
import Card from "./conponents/card";
function App() {
 
  // let myObj = {
  //   username: "prem",
  //   age: 22,
  // };
  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-800 p-4 text-black rounded-3xl mb-4">
        Hello Tailwind user{" "}
      </h1>

      <Card username="MakBook" btnText="click me " />
      <br />
      <Card username="DEL" btnText="visit me  " />
      <br />
      <Card username="VivoBook" btnText="Leptop " />
    </>
  );
}

export default App;
