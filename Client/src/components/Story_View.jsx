import React from "react";

function Story_View() {
  return (
    <div className="Story_View_Container">
      <div className="Story_View">
        <div className="card">
          <div className="top">
            <div className="user_details">
              <div className="profile_img">
                <img src="/img/man.jpeg" className="cover" />
              </div>
              <h3>
                {" "}
                Profile Name
                <br />
                <span className="hour"> 20h</span>
              </h3>
            </div>
            <div className="dot">
              <img src="/img/option.png" alt="dot" />
            </div>
          </div>
          <h4 className="meessage"> The Story will be written here</h4>
          <div className="imgBg">
            <img src="/img/Post_img.webp" alt="bg" className="coverFull" />
          </div>
          <div className="btns">
            <div className="left">
              <img src="/img/red_heart.png" alt="like" />
              <h4 className="likes">40</h4>
            </div>
            <div className="right"> 5 comments</div>
          </div>
          <div className="border"></div>
          <div className="icon">
            <div className="like">
              <img src="/img/heart.png" alt="like" className="heart_btn" />
              <img src="/img/comment.png" alt="like" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="addComments">
            <div className="userimg">
              <img src="/img/man.jpeg" alt="user" className="cover" />
            </div>
            <input
              type="textarea"
              className="text"
              placeholder="Write a comment..."
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story_View;
