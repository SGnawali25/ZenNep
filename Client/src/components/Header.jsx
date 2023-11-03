import React from "react";

function Header() {
  return (
    <>
      <div className="Header">
        {/* Change into picture */}
        <p>LOGO</p>
        <div className="Header_Title">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Tours</a>
          <a href="#">Gallery</a>
          <a href="#">Stories</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Header;
