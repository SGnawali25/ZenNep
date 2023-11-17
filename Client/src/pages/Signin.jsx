import React, {useState, useEffect, Fragment} from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {register, clearErrors} from '../actions/userActions'




const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aggreement, setAggreement] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading, user, error, isAuthenticated} = useSelector(state => state.registerUser)


  useEffect(() => {
    if (isAuthenticated){
        alert.success("Registered successfully");
        dispatch(loadUser())
        navigate('/');
    }

    if (error){
        alert.error(error);
        dispatch(clearErrors());
    }
}, [dispatch, alert, isAuthenticated, error]);

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);

    dispatch(register)

  }

  


  return (
    <>
      <div className="Left_Login">
        <h1>Nepal Tourism</h1>
      </div>
      {/* put image instead of Logo text */}
      <p className="signin_logo">Logo</p>
      <div className="Right_Login">
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="name"> Name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            name="name"
            onChange={(e)=> setName(e.target.value)}
            />
          <label htmlFor="email"> Email</label>
          <input 
            type="text" 
            id="email" 
            value={email}
            name="email"
            onChange={(e)=> setEmail(e.target.value)}
            />
          
          <label htmlFor="password"> Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
            />
\

          <label className="agree_text"></label>
            <input 
              type="checkbox"
              value={aggreement}
              name="check_box"
              id="check_box"
              onChange={(e)=> setAggreement(!aggreement)}
               />

            
               I agree to the <u>Terms and Conditions</u>
            and <u>Privacy Policy</u>
          
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
};

export default Signin;
