import React from "react";

function Comment_Section({comment}) {
  return (
    <div>
      <div className="comment_section">
        <div className="userimg">
          <img src={comment.userImage} alt="user" className="cover" />
        </div>
        <h7>{comment.name} : </h7>
        <div className="commented">{comment.text}</div>
      </div>
    </div>
  );
}

export default Comment_Section;