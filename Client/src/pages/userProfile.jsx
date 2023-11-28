import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../components/Loader";
import Header from "../components/Header";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      {loading == false ? (
        (
            <Fragment>
              <div className="Profile_box">
                <div className="Profile_Content">
                  <h2 className="mt-5 ml-5">My Profile</h2>
                  <div className="row justify-content-around mt-5 user-info">
                    <div className="col-12 col-md-3">
                      <figure className="avatar avatar-profile">
                        <img
                          className="rounded-circle img-fluid"
                          src={user.image.url}
                          alt={user.name}
                        />
                      </figure>
                    </div>
    
                    <div className="col-12 col-md-5">
                      <h4>Full Name</h4>
                      <p>{user.name}</p>
    
                      <h4>Email Address</h4>
                      <p>{user.email}</p>
    
                      <h4>Joined On</h4>
                      <p>{String(user.createdAt).substring(0, 10)}</p>
    
                      <Link
                        to="/password/change"
                        className="btn btn-primary btn-block mt-3"
                      >
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )
        
      ) : <Loader /> }
    </Fragment>
  );
};

export default Profile;
