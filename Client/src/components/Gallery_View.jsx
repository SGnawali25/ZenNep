import React from "react";
import { Link } from "react-router-dom";

function Gallery({place}) {
  
  return (
    <div>
      <div className="gallery_media">
        <div className="gallery_layer">
          <Link to={`/place/${place._id}`} className="PlaceName_Display">{place.name}</Link>
        </div>
        <Link to={`/place/${place._id}`}><img src={place.images.url} alt="" /></Link>
      </div>
    </div>
  );
}

export default Gallery;
