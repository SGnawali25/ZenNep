import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AboutSlideShow from "../components/AboutSlideShow";
import first from "/img/Nepal_BG.avif";
import second from "/img/Nepal(1).jpeg";
import third from "/img/Nepal(3).jpeg";
import fourth from "/img/Nepal(4).jpeg";

function Place_Info() {
  const arr = [first, second, third, fourth];
  const [image, setImage] = useState(first);

  const changeImage = (image) => {
    setImage(image);
  };
  return (
    <div>
      <Header />
      <div className="Info_Container">
        <div className="Img_Left">
          <img src={image} />
          <div className="Destination_Name">Nepal</div>
        </div>
        <div className="Info_Right">
          <h1> Live, Laugh, Love Nepal</h1>
          <AboutSlideShow images={arr} changeImage={changeImage} />
          <div className="information">
            In the cradle of the Himalayas, where heavens kiss the earth's
            embrace, lies Nepal, a land adorned with ethereal grace. Majestic
            peaks crowned with snow, whisper tales of courage and depths untold.
            Valleys lush with verdant hues, a symphony of life, an artist's
            muse. Here, where prayer flags dance in the breeze, and ancient
            temples whisper ancient pleas. Time wanders, hand in hand with
            traditions old, weaving stories of faith in threads of gold. Amidst
            Kathmandu's ancient sprawl, Durbar Square stands proud, a testament
            to all. Festivals ablaze with colors bright, Dashain and Tihar, a
            celestial sight. Yet, Nepal's true beauty isn't just what eyes
            behold; it's the kindness in hearts, a warmth untold. A land where
            nature's grandeur and human spirit entwine, Nepal, a sanctuary, an
            eternal shrine.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place_Info;
