import React from "react";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <div>
      <Header />
      <div className="Home-Container">
        <section className="home">
          <video
            className="video"
            src="/img/Nepal.mp4"
            autoPlay
            muted
            loop
          ></video>
          <div className="content">
            <h1>
              {" "}
              ZenNep
              <br />
              <span className="subtext">Createing Memories Of a LifeTime</span>
            </h1>
            <a href="#"> Get Started</a>
          </div>
          <div className="media-icons">
            <a href="#">
              <img src="/img/facebook.png"></img>
            </a>
            <a href="#">
              <img src="/img/instagram.png"></img>
            </a>
            <a href="#">
              <img src="/img/twitter.png"></img>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
