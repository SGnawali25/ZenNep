import React from "react";

function Header() {
  return (
    <div className="Header-component">
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#">ZenNep</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  Account Name
                  <div className="dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Logout</a>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
