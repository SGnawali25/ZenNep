import React from "react";
import { Link } from "react-router-dom";

function Tour_FlashCard({place}) {
  return (
    <div>
      <div className="blog-card">
        <div className="card-img">
          <Link to={`/place/${place._id}`}><img src={place.images.url} /></Link>
          <h1 className="PlaceName">{place.name}</h1>
        </div>
        <div className="card-details"></div>
        <div className="card-text">
          <p>
            {place.description}
          </p>
        </div>
        <div className="read-more">Read More</div>
      </div>
    </div>
  );
}

export default Tour_FlashCard;
