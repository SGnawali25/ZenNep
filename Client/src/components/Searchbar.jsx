import React from "react";

function Searchbar() {
  return (
    <div>
      <div className="search_wrap">
        <div className="searchbar">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Where do you wanna go?"
            />
            <button type="submit" className="searchButton">
              <img src="/img/search.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
