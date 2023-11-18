import React, {useState, useEffect, Fragment} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';


import Story_View from "../components/Story_View.jsx";
import Loader from "../components/Loader.jsx";

import { getStories, createStory, clearErrors } from "../actions/storyActions.jsx";
import { loadUser } from "../actions/userActions.jsx";

function Story_index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const {stories, error} = useSelector(state => state.stories)
  const {user, isAuthenticated} = useSelector(state =>state.auth)


  const storiesLoading =  useSelector(state => state.stories.loading);
  const authLoading = useSelector(state => state.auth.loading);

  useEffect(()=> {
      setLoading(storiesLoading || authLoading);
  }, [storiesLoading, authLoading])


  const [caption, setCaption] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(true);

  const onChange = e => {
        
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2){
            setPicture(reader.result)
        }

    }
    reader.readAsDataURL(e.target.files[0])
}
const createPost = async(e) => {
  e.preventDefault();

  dispatch(createStory(caption, picture));
  alert.success("Story Created successfully")
  
  
}


  useEffect(()=> {

    if (!isAuthenticated){
      navigate('/login');
  }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
  }

    dispatch(getStories())
  }, [dispatch, error, isAuthenticated])
  
  return (
    <>
      {loading ? <Loader /> : (
        <Fragment>
          <div className="Story_container">
            <div className="body">
              <div className="container">
                <div className="wrapper">
                  <section className="post">
                    <header> Write your Story</header>
                    <form onSubmit={createPost}>
                      <div className="content">
                        <img
                          src={user.image.url}
                          alt="avatar"
                        />
                        <div className="details">
                          <div className="account_name">{user.name}</div>
                        </div>
                      </div>
                      <textarea
                        placeholder="What's your story?"
                        spellCheck="false"
                        name="caption"
                        value={caption}
                        onChange = { (e) => setCaption(e.target.value)}
                        required
                      />
                      <div className="options">
                        <input 
                          className="upload_img" 
                          type="file"
                          id="upload_img"
                          accept = ".jpg, .png, .pdf"
                          name="picture"
                          onChange={onChange}
                        />


                        <ul className="list">
                          <li>
                            <img src={picture} />
                          </li>
                        </ul>
                      </div>
                      <button 
                        type="submit"
                        disabled={loading ? true : false}
                        >Post</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="storyView">
            <div className="ind_story">
              {stories.map(story => (
                <Story_View key={story._id} story={story} user = {user}/>
              ))}
            </div>

          </div>
        </Fragment>
      )}
    </>
  );
}

export default Story_index;
