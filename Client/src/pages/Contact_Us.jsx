import React from "react";
import Header from "../components/Header";

function Contact_Us() {
  return (
    <div>
      <Header />
      <div className="Contact_Container">
        <h1>Contact US</h1>
        <h3>Name</h3>
        <input type="text" className="Contact_box" />
        <h3>Email</h3>
        <input type="text" className="Contact_box" />
        <h3>Message</h3>
        <input type="text" className="Contact_box" />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Contact_Us;
