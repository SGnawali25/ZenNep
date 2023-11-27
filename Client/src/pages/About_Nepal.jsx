import React from "react";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import first from "/img/bhairabsthan.jpeg";
import second from "/img/Pashupati.jpeg";
import third from "/img/Pashupatinath1.jpeg";

function Place_Info() {
  const arr = [first, second, third];
  return (
    <div>
      <Header />
      <div className="Info_Container">
        <div className="Img_Left">
          <img src="/img/Nepal_BG.avif" />
          <div className="Destination_Name">Nepal</div>
        </div>
        <div className="Info_Right">
          <h1> Live, Laugh, Love Nepal</h1>
          <SlideShow images={arr} />
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
