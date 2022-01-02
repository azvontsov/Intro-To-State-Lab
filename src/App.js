import React from "react";
import "./styles.css";
import { useState } from "react";
import Image from "./components/Image";
import imagesArr from "./imageData";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].src);

  function handleClick(image) {
    setBigImage(image);
  }

  const images = imagesArr.map((image, index) => (
    <Image
      selected={image.src === bigImage}
      key={index}
      handleClick={handleClick}
      {...image}
    />
  ));

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {<img src={bigImage} id="bigimage" alt="bigImage" />}
      </div>
    </div>
  );
}
