import { useEffect, useState } from "react";
// import React{useEffect} from "react";

const Spinner = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setShowImg(false);
    setTimeout(() => {
      setText("I waited for 3 seconds to be loaded");
    }, 3000);
  }, []);

  return (
    <>
      <div>{showImg ? <img src=""  /> : <h2>{text}</h2>}</div>
    </>
  );
};

export default Spinner;
