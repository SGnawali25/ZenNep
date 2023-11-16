import React from "react";

const Signin = () => {
  return (
    <>
      <div className="Left_Login">
        <h1>Nepal Tourism</h1>
      </div>
      {/* put image instead of Logo text */}
      <p>Logo</p>
      <div className="Right_Login">
        <h1>Sign In</h1>
        <form>
          <label> Name</label>
          <input type="text" id="Name" />
          <label> Email</label>
          <input type="text" id="Email" />
          <label> Password</label>
          <input type="password" />
          <label> Re-Type Password</label>
          <input type="password" />
          <label className="agree_text">
            <input type="checkbox" />I agree to the <u>Terms and Conditions</u>
            and <u>Privacy Policy</u>
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
};

export default Signin;
