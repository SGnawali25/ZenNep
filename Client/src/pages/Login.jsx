import React from "react";

const Login = () => {
  return (
    <>
      <div className="Left_Login">
        <h1>Nepal Tourism</h1>
      </div>
      {/* put image instead of Logo text */}
      <p>Logo</p>
      <div className="Right_Login">
        <h1>Login</h1>
        <form>
          <label> Email</label>
          <input type="text" id="Email" />
          <label> Password</label>
          <input type="password" />
          <label className="remember_text">
            <input type="checkbox" />
            Remember me
            <label className="forget_text">
              <a href="#">Forget Password?</a>
            </label>
          </label>
          <input type="submit" value="Login" />
          <input type="submit" value="Signin" />
        </form>
      </div>
    </>
  );
};

export default Login;
