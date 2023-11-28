import React from "react";

function AboutSlideShow({images, changeImage}) {


    const handleChange = (image) => {
        changeImage(image);
      }
  return (
    <div>
      <div className="img_slideshow">
        {images.map(image => (
          <img src={image} onClick={() => handleChange(image)}></img>
        ))}
      </div>
    </div>
  );
}

export default AboutSlideShow;