import { useState } from "react";

import "./App.css";
import ComponentsReUse from "./components/components";
import Profile from "./components/profile";
import ComponentsUse from "./components/componentsUse";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
     {/* <ComponentsReUse/> */}
     <Profile/>
     <Profile/>
     {/* <Profile/>
     <Profile/> */}
     {/* <ComponentsReUse/> */}
     <ComponentsUse/>
    </>
  );
}

export default App;
