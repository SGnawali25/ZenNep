import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  likeStory,
  deleteStory,
  commentStory,
  getStories,
} from "../actions/storyActions";
import { useAlert } from "react-alert";
import Comment_Section from "./Comment_section";

function Story_View({ story, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [liker, setLiker] = useState(story.likes.length);
  const [like, setlike] = useState(false);
  const [timeAgoString, settimeAgoString] = useState("20h ago");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(story.comments);

  const commentStoryError =
    useSelector((state) => state.updateStory.error) || "";
  const newStory = useSelector((state) => state.updateStory.story);

  useEffect(() => {
    story.likes.includes(user._id) ? setlike(true) : setlike(false);

    const createdDate = new Date(story.createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      settimeAgoString(`${days}d ago`);
    } else if (hours > 0) {
      settimeAgoString(`${hours}h ago`);
    } else if (minutes > 0) {
      settimeAgoString(`${minutes}m ago`);
    } else {
      settimeAgoString(`${seconds}s ago`);
    }
  }, []);

  const deleteStoryHandler = async () => {
    if (story.user.toString() != user._id.toString() && user.role != "admin") {
      alert.error("You are not allowed to delete this story");
    } else {
      await dispatch(deleteStory(story._id));

      alert.success("Story deleted successfully");
      dispatch(getStories());
    }
  };

  const changeLike = async () => {
    await dispatch(likeStory(story._id));
    setlike(!like);
    if (!like) {
      setLiker(liker + 1);
    } else {
      setLiker(liker - 1);
    }
  };

  const makeComment = async (e) => {
    e.preventDefault();

    if (commentStoryError) {
      alert.error(commentStoryError);
    } else {
      await dispatch(commentStory(story._id, comment));
      // dispatch(getStories());
      setComment("");
      alert.success("Story commented successfully");
      dispatch(getStories());
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
                {story.creator_name}

                <br />
                <span className="hour">{timeAgoString}</span>
              </h3>
            </div>
            <div className="dot">
              <img
                src="/img/delete.png"
                alt="dot"
                onClick={deleteStoryHandler}
                style={{
                  display:
                    story.user.toString() === user._id.toString() ||
                    user.role === "admin"
                      ? "block"
                      : "none",
                }}
              />
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
                <img
                  src="/img/clicked_heart.png"
                  alt="like"
                  className="heart_btn"
                />
              ) : (
                <img src="/img/heart.png" alt="like" className="heart_btn" />
              )}
              <img src="/img/comment.png" alt="like" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="addComments">
            <div className="userimg">
              <img src={user.image.url} alt="user" className="cover" />
            </div>
            <form onSubmit={makeComment}>
              <input
                className="text"
                placeholder="Write a comment..."
                value={comment}
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                required
              ></input>
            </form>
          </div>

          <div className="scroll-comment">
            {comments.length == 0 ? (
              <div className="No_Comments"> NO COMMENTS YET</div>
            ) : (
              comments.map((comment) => (
                <Comment_Section comment={comment} key={comment._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story_View;
