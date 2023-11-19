import React, {useState, useEffect, Fragment} from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import {register, clearErrors, loadUser} from '../actions/userActions'





const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [aggreement, setAggreement] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const {loading, user, error, isAuthenticated} = useSelector(state => state.registerUser)

  const onChange = (e)=> {
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2){
            setPicture(reader.result)
        }

    }
    reader.readAsDataURL(e.target.files[0])
  }


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

    if (aggreement){
      dispatch(register(name, email, password, picture));
    }else {
      alert.error("Please click on the agreement button.")
    }

  }

  


  return (
    <>
      <div className="Left_Login">
        <h1>Nepal Tourism</h1>
      </div>

      {/* put image instead of Logo text */}
      <div className="signin_logo">ZenNep</div>
      <div className="Right_Signin">
        <form onSubmit={submitHandler}>

          <h1>Sign In</h1>
          <div className="form-content">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-content">
              <label htmlFor="email"> Email</label>
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          

          <div className="form-content">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          
          <div className="form-content">
            <label htmlFor="custom-file">Avatar</label>
            <div>
              <div>
                <figure className='avatar mr-3 item-rt1'>
                  <img
                    src={picture}
                    className='avatar_upload'
                  />

                </figure>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  name='picture'
                  maxLength="10MB"
                  accept=".jpg, .png, .pdf"
                  className='cutom-file-input'
                  id='custom-file'
                  onChange={onChange}
                />

                <label htmlFor="custom-file" className="custom-file-label">
                  Choose Avatar
                </label>
              </div>
            </div>
          </div>
          

          <label htmlFor="check_box"></label>


          <div div className="forget_text">
            <input
              type="checkbox"
              value={aggreement}
              name="check_box"
              id="check_box"
              onChange={(e) => setAggreement(!aggreement)}
            />
            I agree to the <u>Terms and Conditions</u>
            and <u>Privacy Policy</u></div>

          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
};

export default Signin;
