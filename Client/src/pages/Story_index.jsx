import React from "react";
import Header from "../components/Header.jsx";

function Story_index() {
  return (
    <>
      <Header />
      <div className="Story_container">
        <div className="body">
          <div className="container">
            <div className="wrapper">
              <section className="post">
                <header> Write your Story</header>
                <form>
                  <div className="content">
                    <img
                      src="
                /img/man.jpeg"
                      alt="avatar"
                    />
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
    </>
  );
}

export default Story_index;
