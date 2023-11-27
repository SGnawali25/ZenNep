import React from "react";

function Review_Section({review}) {

  return (
    <div>
      <div className="comment_section">
        <div className="userimg">
          <img src={review} alt="user" className="cover" />
        </div>
        <h6>{review.name} : </h6>
        <div className="commented">{review.comment}</div>
      </div>
    </div>
  );
}

export default Review_Section;