import React from "react";

function SlideShow({images, changeImage}) {

  const handleChange = (image) => {
    changeImage(image);
  }
  return (
    <div>
      <div className="img_slideshow">
        {images.map(image => (
          <img src={image.url} key={image._id} onClick={() => handleChange(image)}></img>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
