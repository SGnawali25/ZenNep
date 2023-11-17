import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "./Loader";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("logged out successfully");
    navigate("/login");
  };
  return (
    <div className="Header-component">
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#">ZenNep</a>
          </div>
          <div className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Tours</a>
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
                  First_Name
                  <div className="dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Logout</a>
                  </div>
                </button>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

<li>
  <div className="dropdown">
    <button className="dropbtn">
      First_Name
      <div className="dropdown-content">
        <a href="#">Account</a>
        <a href="#">Logout</a>
      </div>
    </button>
  </div>
</li>;
