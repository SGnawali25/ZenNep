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
        <img className="post_img" src="./img/Post.jpg" alt="Post"></img>
      </div>
      <i className="fa-regular fa-thumbs-up"></i>
    </div>
  );
}

export default Story_View;
