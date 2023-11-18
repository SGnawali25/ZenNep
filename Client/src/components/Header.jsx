import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser, logout } from "../actions/userActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "./Loader";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const {user, loading, isAuthenticated} = useSelector(state => state.auth)

  

  const logoutHandler = ()  => {
      dispatch(logout());
      alert.success("logged out successfully");
      navigate("/login")
      
  }
  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div>
          <div className="Header-component">
            <nav>
              <div className="nav-content">
                <div className="logo">
                  <Link to="/">ZenNep</Link>
                </div>
                <div className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/places">Places</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  {(<li>
                    <Link to="/stories">Stories</Link>
                  </li>)}
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    {isAuthenticated ? (
                      <div className="dropdown">
                      <button className="dropbtn">
                        {user.name}
                        <div className="dropdown-content">
                          {/* <a href="#">Account</a> */}
                          <Link to="/login" onClick={logoutHandler} className="logout">Logout</Link>
                        </div>
                      </button>
                    </div>
                    ): (
                      <Link to="/login">Login</Link> 
                    )}
                    
                  </li>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
