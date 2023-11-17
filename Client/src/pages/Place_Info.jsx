import React from "react";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";

function Place_Info() {
  return (
    <div>
      <Header />
      <div className="Info_Container">
        <div className="Img_Left">
          <img src="/img/Pashupati.jpeg" />
          <div className="Destination_Name">Pashupatinath</div>
        </div>
        <div className="Info_Right">
          <div className="Rating_section">
            <div className="stars">
              <input type="radio" name="rating4" value="1" />
              <input type="radio" name="rating4" value="2" />
              <input type="radio" name="rating4" value="3" checked />
              <input type="radio" name="rating4" value="4" />
              <input type="radio" name="rating4" value="5" />
              <i></i>
            </div>
            <div className="Rate_Count">10</div>
          </div>
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

          <div className="Rater">
            <div className="Rate_Line"> Rate This place </div>
            <div className="Rating_Time">
              <div className="stars">
                <input type="radio" name="rating" value="1" />
                <input type="radio" name="rating" value="2" />
                <input type="radio" name="rating" value="3" />
                <input type="radio" name="rating" value="4" />
                <input type="radio" name="rating" value="5" />
                <i></i>
              </div>
              <div className="Rate_Message">
                <input
                  type="text"
                  className="Rate_text"
                  placeholder="Did you like it?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place_Info;
