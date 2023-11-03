import React from "react";

function Story_index() {
  return (
    <div>
      <div className="Post">
        <div className="Story_Write">
          <div className="avatar_img">
            <img src="./img/Login_img.jpg" alt="avatar"></img>
          </div>
          <form className="Post_Content">
            <textarea placeholder="Write your story here.."></textarea>
          </form>
        </div>
        <div className="Buttons">
          <button className="Button_Post">Upload Image</button>
          <button className="Button_Post"> Post Button</button>
        </div>
      </div>
    </div>
  );
}

export default Story_index;
