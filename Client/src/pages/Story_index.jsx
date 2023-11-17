import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import Story_View from "../components/Story_View.jsx";
import Loader from "../components/Loader.jsx";

import { getStories, clearErrors } from "../actions/storyActions.jsx";
import { loadUser } from "../actions/userActions.jsx";

function Story_index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { stories, error } = useSelector((state) => state.stories);
  const { user } = useSelector((state) => state.auth);

  const storiesLoading = useSelector((state) => state.stories.loading);
  const authLoading = useSelector((state) => state.auth.loading);

  const loading = storiesLoading || authLoading;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(loadUser());
    dispatch(getStories());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="Story_container">
            <div className="Story_body">
              <div className="container">
                <div className="wrapper">
                  <section className="post">
                    <header> Write your Story</header>
                    <form>
                      <div className="content">
                        <img src={user.image.url} alt="avatar" />
                        <div className="details">
                          <div className="account_name">Account Name</div>
                        </div>
                      </div>
                      <textarea
                        placeholder="What's your story?"
                        spellCheck="false"
                        required
                      />
                      <div className="options">
                        <div className="upload_img">Upload Image</div>
                        <ul className="list">
                          <li>
                            <img src="/img/upload.png" />
                          </li>
                        </ul>
                      </div>
                      <button>Post</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="storyView">
            <div className="ind_story">
              {stories.map((story) => (
                <Story_View key={story._id} story={story} user={user} />
              ))}
              {/* <Story_View />
              <Story_View />
              <Story_View /> */}
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
}

export default Story_index;
