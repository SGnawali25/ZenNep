import React, { useState } from "react";
import Header from "../components/Header";
import { useAlert } from "react-alert";

function Contact_Us() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const alert = useAlert();

  const submitHandler = (e) => {
    e.preventDefault();
    alert.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Header />
      <div className="Contact_Container">
        <div className="Contact_Content">
          <form onSubmit={submitHandler}>
            <h1>Contact US</h1>
            <h3>Name</h3>
            <input
              type="text"
              className="Contact_box"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Email</h3>
            <input
              type="text"
              className="Contact_box"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Message</h3>
            <textarea
              type="text"
              className="Contact_box"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact_Us;
