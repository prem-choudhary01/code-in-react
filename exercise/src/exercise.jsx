import React from "react";
import { useState } from "react";
const  Exercise = () => {
    // const itmea = ["Itme 1 " , "Item 2" , "Item 3" , "Item 4"]
    const [item , setItem] = useState([])

    return(
        <div id="parent">
        <h2>Toys under $25</h2>
        <img 
          id="img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
        />
        <button id="btn"><span>see more</span></button>
      </div>
    )
}
export default Exercise