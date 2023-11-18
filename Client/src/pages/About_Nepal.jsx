import React from "react";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";

function Place_Info() {
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
          <SlideShow />
          <div className="information">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            provident minus doloribus nostrum ipsum recusandae officiis libero
            molestiae illum pariatur tenetur iusto, eaque quae cupiditate non
            explicabo consequuntur maxime eos!Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Accusamus provident minus doloribus
            nostrum ipsum recusandae officiis libero molestiae illum pariatur
            tenetur iusto, eaque quae cupiditate non explicabo consequuntur
            maxime eos!Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusamus provident minus doloribus nostrum ipsum recusandae
            officiis libero molestiae illum pariatur tenetur iusto, eaque quae
            cupiditate non explicabo consequuntur maxime eos!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Accusamus provident minus
            doloribus nostrum ipsum recusandae officiis libero molestiae illum
            pariatur tenetur iusto, eaque quae cupiditate non explicabo
            consequuntur maxime eos!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place_Info;