import React from "react";
import Tour_FlashCard from "../components/Tour_FlashCard";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";

function Tour_Display() {
  return (
    <div>
      <Header />
      <div className="subheader">
        <Searchbar />
      </div>
      <div className="blog-wrapper">
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
        <Tour_FlashCard />
      </div>
    </div>
  );
}

export default Tour_Display;
