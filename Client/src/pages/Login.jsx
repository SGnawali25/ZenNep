import React, {useState, useEffect, Fragment} from "react";
import Loader from "../components/Loader";
import {Link, useNavigate} from "react-router-dom";

import {useAlert} from 'react-alert';
import {useDispatch, useSelector} from 'react-redux';

import {login, clearErrors} from '../actions/userActions'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuthenticated, error, loading, user} = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated){
        navigate('/stories')
    }

    if (error){
        if (error !== "Please login to view the resources"){
            alert.error(error);
        }
        
        dispatch(clearErrors());
    }
  },[dispatch, alert, isAuthenticated, error])

    const submitHandler = async(e) => {
      e.preventDefault();
      dispatch(login(email, password))
      
    }


  return (
    <>
      {loading ? <Loader /> : (
        <Fragment>
          <div className="Left_Login">
            <h1>Nepal Tourism</h1>
          </div>
          {/* put image instead of Logo text */}
          <p>ZenNep</p>
          <div className="Right_Login">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>

              <label htmlFor="email"> Email</label>
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                onChange={(e) => (setEmail(e.target.value))}
              />

              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id='password'
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <label className="remember_text">
                <input type="checkbox" />
                Remember me

                <label className="forget_text">
                  <a href="#">Forget Password?</a>
                </label>

              </label>
              <input type="submit" value="Login" />
            </form>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Login;
