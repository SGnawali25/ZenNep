import React from "react";
import Header from "../components/Header";
import Gallery_View from "../components/Gallery_View";

function Gallery() {
  return (
    <div>
      <Header />
      <div className="gallery_body">
        <div className="gallery_wrapper">
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
          <Gallery_View />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
