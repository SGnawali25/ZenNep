import React from "react";

function Story_View() {
  return (
    <div>
      <div className="Post">
        <div className="Story">
          <div className="avatar_img">
            <img src="./img/Login_img.jpg" alt="avatar"></img>
          </div>
          <div className="Story_Name">UserName added a new story!</div>
        </div>
        <div className="img_post">
          <img className="post_img" src="./img/Post.jpg" alt="Post"></img>
        </div>
        <div className="Like_Comment">
          <button className="Like">Like</button>
          <button className="Comment">Comment</button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Story_View;
