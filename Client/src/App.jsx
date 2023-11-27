import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Loader from "./components/Loader";

import "./App.css";
import "./Log_In.css";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Story_index from "./pages/Story_index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Tour_Display from "./pages/Tour_Display";
import Tour_FlashCard from "./components/Tour_FlashCard";
import Place_Info from "./pages/Place_Info";
import About_Nepal from "./pages/About_Nepal";
import Contact_Us from "./pages/Contact_Us";
import { loadUser } from "./actions/userActions";
import userProfile from "./pages/userProfile";
import changePassword from "./pages/changePassword";
import AllUsers from "./pages/AllUsers";

function App() {
  useEffect(() => {
    const fetchUser = async() => {
      await store.dispatch(loadUser());
    }

    fetchUser();
    
  }, []);

  return (
    <div>
      <Router>
          <Routes>
          <Route path='/' Component={Home} exact />
          <Route path="/signup" Component={Signin} exact />
          <Route path='/login' Component={Login} exact />
          <Route path='/stories' Component={Story_index} exact />
          <Route path='/contact' Component={Contact_Us} exact />
          <Route path="/about" Component={About_Nepal} exact />
          <Route path="/gallery" Component={Gallery} exact />
          <Route path="/place/:id" Component={Place_Info} exact />
          <Route path="/places" Component={Tour_Display} exact />
          <Route path="/places/search/:keyword" Component={Tour_Display} exact />
          <Route path="/me" Component={userProfile} exact />
          <Route path= "/password/change" Component={changePassword} exact />
          <Route path="/users" Component={AllUsers} exact />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
