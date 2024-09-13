import React, { useState } from "react";

function Profile() {
  const [data , setData] = useState("")

  
  return (
    <>
      <header>
        <nav>
          <input id="price" type="text" placeholder="search product" />
        </nav>
      </header>
      <hr />
      <center>
        <h1>This is for you girls</h1>
        <div id="box">
          <div id="box1">
            <h3>Toys under $25</h3>
            <img src="https://m.media-amazon.com/images/I/71jwx0Q31AL._AC_UL480_FMwebp_QL65_.jpg" />
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Beauty steals under $25</h3>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg" />
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Get your game on</h3>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg" />
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Home décor under $50</h3>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" />
            <button id="btn">Shop me</button>
          </div>
        </div>
      </center>
      <hr />
      <center id="center">
        <h1>Gaming merchandise</h1>
        <hr />
        <div id="box">
          <div id="box1">
            <h3>Toys under $25</h3>
            <img src="https://m.media-amazon.com/images/I/814hp8QMsjL._AC_SY550_.jpg"/>
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Beauty steals under $25</h3>
            <img src="https://m.media-amazon.com/images/I/61cqIcgep+L._AC_UL480_FMwebp_QL65_.jpg"/>
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Get your game on</h3>
            <img src="https://m.media-amazon.com/images/I/61JckjKagSL._AC_SX569_.jpg"/>
            <button id="btn">Shop me</button>
          </div>
          <div id="box1">
            <h3>Home décor under $50</h3>
            <img src="https://m.media-amazon.com/images/I/51hJse2o9eL._AC_UL480_FMwebp_QL65_.jpg"/>
            <button id="btn">Shop me</button>
          </div>
        </div>
      </center>
    </>
  );
}
export default Profile;
