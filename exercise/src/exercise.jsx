const Exercise = () => {
  const item = ["Itme 1 ", "Item 2" , ].map((x) => ({
    title: x,
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
    // url1 :"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg"
  }));

  return (
    <div id="menu">
      <ul>
        {item.map(({ title, url }, i) => (
          <li key={i}>
            <h2>{title}</h2>
            <img id="img" src={url} />
            <button id="btn">
              <span>see more</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Exercise;
