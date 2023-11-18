import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { likeStory, getStories } from "../actions/storyActions";

function Story_View({story, user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [liker, setLiker] = useState(story.likes.length)
  const [like, setlike] = useState(false);
  const [timeAgoString, settimeAgoString] = useState("20h ago");

  const createdDate = new Date(story.createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate - createdDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  console.log(days);

  // if (days > 0) {
  //   settimeAgoString(`${days}d ago`);
  // } else if (hours > 0) {
  //   settimeAgoString(`${hours}h ago`);
  // } else if (minutes > 0) {
  //   settimeAgoString(`${minutes}m ago`);
  // } else {
  //   settimeAgoString(`${seconds}s ago`);
  // }

  useEffect(()=>{
    story.likes.includes(user._id) ? setlike(true) : setlike(false)
  }, [])

  const changeLike = async() => {
    await dispatch(likeStory(story._id));
    setlike(!like);
    if (!like){
      setLiker(liker + 1)
    } else {
      setLiker(liker - 1)
    }
    };
  return (
    <div className="Story_View_Container">
      <div className="Story_View">
        <div className="card">
          <div className="top">
            <div className="user_details">
              <div className="profile_img">
                <img src={story.userImage} className="cover" />
              </div>
              <h3>
                {story.name}
                
                <br />
                <span className="hour">{timeAgoString}</span>
              </h3>
            </div>
            <div className="dot">
              <img src="/img/option.png" alt="dot" />
            </div>
          </div>
          <h4 className="meessage">{story.caption}</h4>
          <div className="imgBg">
            <img src={story.image.url} alt="bg" className="coverFull" />
          </div>
          <div className="btns">
            <div className="left">
              <img src="/img/red_heart.png" alt="like" />
              <h4 className="likes">{liker} likes</h4>
            </div>
            <div className="right">{story.comments.length} comments</div>
          </div>
          <div className="border"></div>
          <div className="icon">
            <div className="like" onClick={changeLike}>
              {like ? (
                <img src="/img/clicked_heart.png" alt="like" className="heart_btn" />
              ) : (
                <img
                  src="/img/heart.png"
                  alt="like"
                  className="heart_btn"
                />
              )}
              <img src="/img/comment.png" alt="like" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="addComments">
            <div className="userimg">
              <img src={user.image.url} alt="user" className="cover" />
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
