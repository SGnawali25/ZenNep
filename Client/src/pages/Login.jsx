import React from "react";

const Login = () => {
  return (
    <>
      <div className="Left_Login">
        <h1>Nepal Tourism</h1>
      </div>

      <div className="Right_Login">
        <h3>Logo</h3>
        <h1>Login</h1>
        <form>
          <input type="text" />
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
