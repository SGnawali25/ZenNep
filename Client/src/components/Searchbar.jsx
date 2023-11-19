import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Searchbar(props) {
  const [keyword, setKeyword] = useState(props.keyword);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()){
      navigate(`/places/search/${keyword}`)
    } else {
      navigate(`/places`)
    }
  }

  return (
    <div>
      <div className="search_wrap">
        <div className="searchbar">
          <div className="search">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="searchTerm"
                placeholder="Where do you wanna go?"
                name="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" className="searchButton">
                <img src="/img/search.png" width={50} height={50} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
